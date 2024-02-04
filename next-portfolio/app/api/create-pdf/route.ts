import puppeteer from "puppeteer-core";

export async function GET() {
  const browser =
    process.env.NODE_ENV === "development"
      ? await puppeteer.launch({
          executablePath: process.env.CHROME_EXECUTABLE_PATH,
          headless: "new",
        })
      : await puppeteer.connect({
          browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
        });

  const page = await browser.newPage();

  const websiteUrl = "https://dsm23-next-portfolio.vercel.app/";

  await page.goto(websiteUrl, { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    displayHeaderFooter: true,
    margin: { top: "50px", right: "50px", bottom: "50px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  await browser.close();

  return new Response(new Blob([pdf], { type: "application/pdf" }));
}
