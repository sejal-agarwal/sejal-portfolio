/**
 * This site is served under a sub-path of sejalagarwal.ca (see next.config.ts).
 * Next.js adds the prefix to links and routes by itself, but not to image sources,
 * so wrap any "/file.png"-style path in this.
 */
export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
