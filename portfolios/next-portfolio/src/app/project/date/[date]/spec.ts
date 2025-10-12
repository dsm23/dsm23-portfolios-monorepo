/**
 * @vitest-environment node
 */

import type { NextRequest } from "next/server";
import { describe, expect, it, vi } from "vitest";
import { GET } from "./route";

describe("[api: date]", () => {
  it("unix number", async () => {
    const res = await GET(
      // unused
      {} as NextRequest,
      {
        params: {
          date: "1451001600000",
        },
      },
    );

    const json = await res.json();

    expect(json).toEqual({
      unix: 1451001600000,
      utc: "Fri, 25 Dec 2015 00:00:00 GMT",
    });
  });

  it("Date constructor parameter, ISO", async () => {
    const res = await GET(
      // unused
      {} as NextRequest,
      {
        params: {
          date: "2015-12-25",
        },
      },
    );

    const json = await res.json();

    expect(json).toEqual({
      unix: 1451001600000,
      utc: "Fri, 25 Dec 2015 00:00:00 GMT",
    });
  });

  it("Date constructor parameter, long date string, ", async () => {
    const res = await GET(
      // unused
      {} as NextRequest,
      {
        params: {
          date: "December 25, 2015 00:00:00",
        },
      },
    );

    const json = await res.json();

    expect(json).toEqual({
      unix: 1451001600000,
      utc: "Fri, 25 Dec 2015 00:00:00 GMT",
    });
  });

  it("Date now, ", async () => {
    vi.useFakeTimers().setSystemTime(new Date("1970-01-01T00:00:01+0000"));

    const res = await GET(
      // unused
      {} as NextRequest,
      {
        params: {
          date: "now",
        },
      },
    );

    const json = await res.json();

    expect(json).toEqual({
      unix: 1000,
      utc: "Thu, 01 Jan 1970 00:00:01 GMT",
    });
  });

  it("Invalid date, ", async () => {
    const res = await GET(
      // unused
      {} as NextRequest,
      {
        params: {
          date: "foobar",
        },
      },
    );

    const json = await res.json();

    expect(json).toEqual({
      error: "Invalid Date",
    });
  });
});
