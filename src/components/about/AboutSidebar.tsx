"use client";

import { useState } from "react";

type Section = {
  id: string;
  label: string;
  items: { id: string; label: string }[];
};

const sections: Section[] = [
  {
    id: "personal-info",
    label: "personal-info",
    items: [
      { id: "bio", label: "bio" },
      { id: "interests", label: "interests" },
      { id: "education", label: "education" },
    ],
  },
  {
    id: "contacts",
    label: "contacts",
    items: [
      { id: "email", label: "user@email.com" },
      { id: "phone", label: "+33 6 00 00 00 00" },
    ],
  },
];

export default function AboutSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "personal-info": true,
    contacts: true,
  });

  function toggle(sectionId: string) {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  }

  return (
    <aside className="pr-4 mt-6">
      <div className="space-y-5">
        {sections.map(section => (
          <div key={section.id}>
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center gap-2 text-left text-sm text-foreground/80 hover:text-foreground"
            >
              <span
                className={`inline-block h-4 w-4 transition-transform ${
                  openSections[section.id] ? "rotate-90" : "rotate-0"
                }`}
                aria-hidden
              >
                ▶
              </span>
              <span className="font-medium">{section.label}</span>
            </button>
            {openSections[section.id] && (
              <div className="mt-2 w-full border-y py-3 pl-6" style={{ borderColor: "var(--border)" }}>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {section.items.map(item => (
                    <li key={item.id} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                      <span className="truncate">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t text-sm" style={{ borderColor: "var(--border)" }}>
        <p className="mb-3 text-foreground/70">find me in:</p>
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-md px-2 bg-foreground/10 hover:bg-foreground/15"
          >
            in
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 items-center justify-center rounded-md px-2 bg-foreground/10 hover:bg-foreground/15"
          >
            X
          </a>
        </div>
      </div>
    </aside>
  );
}


