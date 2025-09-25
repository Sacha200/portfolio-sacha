import AboutSidebar from "@/components/about/AboutSidebar";
import AboutEditor from "@/components/about/AboutEditor";
import SnippetCard from "@/components/about/SnippetCard";
import BackgroundGlows from "@/components/BackgroundGlows";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-0 relative">
      <BackgroundGlows key="about" variant="about" />
      <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: "calc(100vh - 56px - 56px)" }}>
        <div className="lg:col-span-2 border-r" style={{ borderColor: "var(--border)" }}>
          <AboutSidebar />
        </div>
        <div className="lg:col-span-6 space-y-4 border-r px-6 py-12" style={{ borderColor: "var(--border)" }}>
          <AboutEditor />
         
        </div>
        <div className="lg:col-span-4 space-y-6 px-6 py-12">
          <SnippetCard
            showMetaHeader
            username="@username"
            createdAgo="5 months ago"
            stars={3}
            title="initializeModelChunk.ts"
            meta="details"
            code={`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {\n  const value: T = parseModel(chunk._response, chunk._value);\n  const initializedChunk: InitializedChunk<T> = (chunk: any);\n  initializedChunk._status = INITIALIZED;\n  initializedChunk._value = value;\n  return value;\n}`}
          />
          <SnippetCard
            showMetaHeader
            username="@username"
            createdAgo="9 months ago"
            stars={0}
            title="parseModelTuple.ts"
            meta="details"
            code={`export function parseModelTuple(\n  response: Response,\n  value: {[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,\n): any {\n  const tuple: [mixed, mixed, mixed, mixed] = (value: any);\n}`}
          />
        </div>
      </div>
    </section>
  );
}
