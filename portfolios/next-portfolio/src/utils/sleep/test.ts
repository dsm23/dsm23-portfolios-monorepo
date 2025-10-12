import { describe, expect, it, vi } from "vitest";
import sleep from ".";

vi.useFakeTimers();

describe("utils", () => {
  describe("sleep", () => {
    it("calls setTimeout with the specified delay", async () => {
      const delay = 1000;

      const spy = vi.spyOn(globalThis, "setTimeout");

      const sleepPromise = sleep(delay);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Function), delay);

      vi.advanceTimersByTime(delay);
      await sleepPromise;
    });
  });
});
