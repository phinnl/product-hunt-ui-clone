import { MutableRefObject, useEffect } from "react";

export function useHover(
  ref: MutableRefObject<HTMLElement | null>,
  mouseOverHandler: (event: MouseEvent) => void,
  mouseOutHandler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", mouseOverHandler);
      node.addEventListener("mouseout", mouseOutHandler);
      return () => {
        node.removeEventListener("mouseover", mouseOverHandler);
        node.removeEventListener("mouseout", mouseOutHandler);
      };
    }
  }, [ref, mouseOverHandler, mouseOutHandler]);
}
