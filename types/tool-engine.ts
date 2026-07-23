export interface ToolEngine<
  Input = unknown,
  Output = unknown,
> {
  execute(
    input: Input,
    settings: unknown
  ): Promise<Output>;
}