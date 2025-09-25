type SnippetCardProps = {
  title: string;
  code: string;
  meta?: string;
  showMetaHeader?: boolean;
  username?: string;
  createdAgo?: string;
  stars?: number;
  avatarUrl?: string;
};

function escapeHtml(input: string): string {
  return input
    .replaceAll(/&/g, "&amp;")
    .replaceAll(/</g, "&lt;")
    .replaceAll(/>/g, "&gt;");
}

function highlightCode(raw: string): string {
  let html = escapeHtml(raw);

  const rules: { regex: RegExp; cls: string }[] = [
    { regex: /\bfunction\b/g, cls: "text-rose-300" },
    { regex: /\bparseModel\b/g, cls: "text-purple-300" },
    { regex: /\bInitializedChunk\b/g, cls: "text-orange-300" },
    { regex: /\bJSONValue\b/g, cls: "text-teal-500" },
    { regex: /\bINITIALIZED\b/g, cls: "text-indigo-500" },
  ];

  for (const { regex, cls } of rules) {
    html = html.replace(regex, match => `<span class=\"${cls}\">${match}</span>`);
  }
  return html;
}

export default function SnippetCard({ title, code, meta, showMetaHeader, username = "@username", createdAgo, stars = 0, avatarUrl }: SnippetCardProps) {
  const highlighted = highlightCode(code);
  return (
    <div className="space-y-3">
      {showMetaHeader && (
        <div className="rounded-lg border px-4 py-3 flex items-center justify-between" style={{ borderColor: "#314158", backgroundColor: "#020618" }}>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full overflow-hidden bg-foreground/20 flex items-center justify-center text-xs" aria-hidden>
              {avatarUrl ? <img src={avatarUrl} alt="avatar" className="h-full w-full object-cover" /> : ""}
            </span>
            <div className="text-sm">
              <div className="text-foreground/90">{username}</div>
              {createdAgo && <div className="text-foreground/60">Created {createdAgo}</div>}
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-foreground/70">
            <span className="flex items-center gap-1">
              <span aria-hidden>◦</span>
              <span>details</span>
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden>★</span>
              <span>{stars} stars</span>
            </span>
          </div>
        </div>
      )}
      <div className="rounded-lg border transition-shadow hover:shadow-[0_0_28px_rgba(37,99,235,.35)]" style={{ borderColor: "#314158", backgroundColor: "#020618" }}>
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "#314158" }}>
          <div className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden />
            <span className="text-foreground/90">{title}</span>
          </div>
          {meta && <span className="text-xs text-foreground/60">{meta}</span>}
        </div>
        <pre className="p-4 text-xs overflow-auto"><code className="text-slate-500" dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
      </div>
    </div>
  );
}


