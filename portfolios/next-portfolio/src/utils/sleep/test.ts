import { describe, expect, it } from "@jest/globals";
import sleep from ".";

jest.useFakeTimers();

describe("utils", () => {
  describe("sleep", () => {
    it("calls setTimeout with the specified delay", async () => {
      const delay = 1000;

      const spy = jest.spyOn(globalThis, "setTimeout");

      const sleepPromise = sleep(delay);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Function), delay);

      jest.advanceTimersByTime(delay);
      await sleepPromise;
    });
  });
});
