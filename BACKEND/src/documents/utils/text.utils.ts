export function countTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export function chunkTextByToken(text: string, maxTokens: number): string[] {
  const maxChars = maxTokens * 4;
//   const chunks = [];
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += maxChars) {
    chunks.push(text.slice(i, i + maxChars));
  }
  return chunks;
}

