export function removeTags(input: string): string {
  return input.replace(/<\/?(p|b|i)>/g, "");
}
