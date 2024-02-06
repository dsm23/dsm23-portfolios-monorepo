import { useEffect } from "react";
import type { RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (!ref?.current?.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickOutside;
