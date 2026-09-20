"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";

const options: LenisOptions = {
  // Lower is smoother/heavier. 0.1 is a good middle ground.
  lerp: 0.1,
  // Smooth out clicks on same-page `#hash` links too.
  anchors: true,
  // Let overflow-scroll panes (code blocks, modals) scroll natively.
  allowNestedScroll: true,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
