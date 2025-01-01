declare namespace NodeJS {
  interface ProcessEnv {
    BROWSERLESS_TOKEN: string;
    CHROME_EXECUTABLE_PATH: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_ACCESS_TOKEN: string;
    CONTENTFUL_PREVIEW_TOKEN: string;
    CONTENTFUL_REVALIDATE_SECRET: string;
    ORIGIN_URL: string;
  }
}
