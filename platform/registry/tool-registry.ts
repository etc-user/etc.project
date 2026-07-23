import type { ToolDefinition } from "@/types/tool";

class ToolRegistry {
  private tools = new Map<string, ToolDefinition>();

  register(tool: ToolDefinition) {
    if (this.tools.has(tool.id)) {
      throw new Error(
        `Tool "${tool.id}" is already registered.`
      );
    }

    this.tools.set(tool.id, tool);
  }

  get(id: string) {
    return this.tools.get(id);
  }

  getAll() {
    return [...this.tools.values()];
  }

  getByCategory(category: ToolDefinition["category"]) {
    return this.getAll().filter(
      (tool) => tool.category === category
    );
  }

  has(id: string) {
    return this.tools.has(id);
  }
}

export const registry = new ToolRegistry();