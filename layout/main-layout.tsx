import { OverlayContainer } from "@/components";
import { Header } from "@/layout";
import { ReactElement } from "react";

export function MainLayout(children: ReactElement) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <OverlayContainer />
      <Header />
      {children}
    </div>
  );
}
