"use client";

import { useState } from "react";

type Section = {
  id: string;
  label: string;
  items: { id: string; label: string }[];
};

function ItemIcon({ id }: { id: string }) {
  const base = "h-4 w-4";

  switch (id) {
    case "bio":
      // folder icon (pink)
      return (
        <svg className={`${base} text-pink-400`} viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
      );
    case "interests":
      // folder icon (teal)
      return (
        <svg className={`${base} text-teal-400`} viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
      );
    case "education":
      // folder icon (violet)
      return (
        <svg className={`${base} text-violet-400`} viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
      );
    case "email":
      // mail icon
      return (
        <svg className={`${base} text-foreground/60`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
          <path d="m22 6-10 7L2 6"/>
        </svg>
      );
    case "phone":
      // phone icon
      return (
        <svg className={`${base} text-foreground/60`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.13.98.37 1.93.72 2.83a2 2 0 0 1-.45 2.11L7 8c1.5 2.9 3.9 5.3 6.8 6.8l.34-.38a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.83.72A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
    default:
      // generic file icon
      return (
        <svg className={`${base} text-foreground/60`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
        </svg>
      );
  }
}

const sections: Section[] = [
  {
    id: "personal-info",
    label: "infos-personnelles" ,
    items: [
      { id: "bio", label: "bio" },
      { id: "interests", label: "interets" },
      { id: "education", label: "formation" },
    ],
  },
  {
    id: "contacts",
    label: "contacts",
    items: [
      { id: "email", label: "email@email.com" },
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
    <aside className=" mt-6">
      <div className="space-y-5">
        {sections.map(section => (
          <div key={section.id}>
            <button
              onClick={() => toggle(section.id)}
              className="w-full flex items-center gap-2 px-3 text-left text-sm text-foreground/80 hover:text-foreground"
            >
              <span
                className={`inline-block h-4 w-4 transition-transform ${
                  openSections[section.id] ? "rotate-90" : "rotate-0"
                }`}
                aria-hidden
              >
                ▶
              </span>
              <span className="font-retina -mt-2">{section.label}</span>
            </button>
            {openSections[section.id] && (
              <div className="mt-2 -ml-4 w-full border-y-2 py-3 pl-7 pr-3" style={{ borderColor: "var(--border)" }}>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {section.items.map(item => (
                    <li key={item.id} className="flex items-center gap-2">
                      <ItemIcon id={item.id} />
                      <span className="truncate font-retina">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 -ml-4 pl-7 pr-3" style={{ borderColor: "var(--border)" }}>
        <p className="my-5 text-foreground/70 font-retina">me-trouver-sur:</p>
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


