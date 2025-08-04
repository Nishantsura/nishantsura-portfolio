import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
// Import icons from Heroicons package
import { BookOpenIcon, BriefcaseIcon, FireIcon } from "@heroicons/react/24/outline";

export function DockDemo() {
  return (
    <div
      className="fixed top-6 right-8 z-50"
      style={{ pointerEvents: "auto" }}
    >
      <Dock direction="middle">
        <a href="/case-studies" aria-label="Case Studies">
          <DockIcon>
            <BookOpenIcon className="size-7 text-[#eab308]" />
          </DockIcon>
        </a>
        <a href="/work" aria-label="Work">
          <DockIcon>
            <BriefcaseIcon className="size-7 text-[#22d3ee]" />
          </DockIcon>
        </a>
        <a href="/career" aria-label="Career">
          <DockIcon>
            <FireIcon className="size-7 text-[#f472b6]" />
          </DockIcon>
        </a>
      </Dock>
    </div>
  );
}
