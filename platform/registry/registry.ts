import type { Tool } from "../sdk/tool";

class ToolRegistry {
  private tools = new Map<string, Tool>();

  register(tool: Tool) {
    if (this.tools.has(tool.metadata.id)) {
      throw new Error(
        `Tool "${tool.metadata.id}" is already registered.`
      );
    }

    this.tools.set(tool.metadata.id, tool);
  }

  get(id: string) {
    return this.tools.get(id);
  }

  getAll() {
    return Array.from(this.tools.values());
  }

  getByCategory(category: string) {
    return this.getAll().filter(
      (tool) => tool.metadata.category === category
    );
  }

  search(query: string) {
    const q = query.toLowerCase();

    return this.getAll().filter((tool) => {
      return (
        tool.metadata.title.toLowerCase().includes(q) ||
        tool.metadata.description
          .toLowerCase()
          .includes(q) ||
        tool.metadata.keywords.some((k) =>
          k.toLowerCase().includes(q)
        )
      );
    });
  }
}

export const registry = new ToolRegistry();