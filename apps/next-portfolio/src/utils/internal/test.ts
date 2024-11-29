import { describe, expect, it } from "@jest/globals";
import internal from ".";

describe("utils", () => {
  describe("internal", () => {
    it("returns true", async () => {
      expect(internal("/internal")).toBe(true);
    });

    it("returns false", async () => {
      expect(internal("https://internal")).toBe(false);
    });
  });
});
