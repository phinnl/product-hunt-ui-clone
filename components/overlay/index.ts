import dynamic from "next/dynamic";
import { OverlayProps } from "./overlay-item";

export * from "./overlay-container";

export const Overlay = dynamic<OverlayProps>(() => import("./overlay-item").then(module => module.Overlay), {
  ssr: false,
});