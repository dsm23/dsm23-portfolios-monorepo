import type { NextRequest } from "next/server";

type Params = {
  date: string;
};

const isNumeric = (value: string) => /^-?\d+$/.test(value);

export const GET = async (
  _: NextRequest,
  context: { params: Promise<Params> },
) => {
  const dateParam = (await context.params).date;

  try {
    if (isNumeric(dateParam)) {
      const unix = parseInt(dateParam);

      return Response.json({
        unix,
        utc: new Date(unix).toUTCString(),
      });
    }

    if (dateParam.toLowerCase() === "now") {
      return Response.json({
        unix: Date.now(),
        utc: new Date().toUTCString(),
      });
    }

    const date = new Date(dateParam);

    if (date.toDateString() === "Invalid Date") {
      throw new Error("Invalid Date");
    }

    return Response.json({
      unix: date.valueOf(),
      utc: date.toUTCString(),
    });
  } catch {
    return Response.json({
      error: "Invalid Date",
    });
  }
};
