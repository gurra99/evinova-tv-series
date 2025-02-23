import { Root } from "./layout.styles";
import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}
