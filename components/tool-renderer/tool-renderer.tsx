"use client";

import type { Tool } from "@/platform/sdk";

type Props = {
  tool: Tool;
};

export default function ToolRenderer({
  tool,
}: Props) {
  return (
    <main>

      <h1>
        {tool.metadata.title}
      </h1>

      <p>
        {tool.metadata.description}
      </p>

      <section>

        {/* Upload Engine */}

      </section>

      <section>

        {/* Tool Settings */}

      </section>

      <section>

        {/* Processing */}

      </section>

      <section>

        {/* Results */}

      </section>

    </main>
  );
}