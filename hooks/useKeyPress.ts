import { useEffect } from "react";

export function useKeyPress(
  targetKey: string,
  downEvent?: () => void,
  upEvent?: () => void
) {
  function downHandler({ key }: KeyboardEvent) {
    if (downEvent && key === targetKey) {
      downEvent();
    }
  }
  const upHandler = ({ key }: KeyboardEvent) => {
    if (upEvent && key === targetKey) {
      upEvent();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
}
