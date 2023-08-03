import path from "path";

export function getPath(source: string) {
  return path.resolve(path.dirname(__dirname), source);
}
