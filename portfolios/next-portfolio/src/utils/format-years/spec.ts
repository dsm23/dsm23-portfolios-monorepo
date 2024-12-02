import { describe, expect, it } from "@jest/globals";
import formatYears from ".";

describe("[utils: formatYears]", () => {
  it("different years", () => {
    expect(formatYears("May 2022", "June 2024")).toBe("May 2022 - June 2024");
  });

  it("same year", () => {
    expect(formatYears("May 2024", "June 2024")).toBe("May - June 2024");
  });
});
