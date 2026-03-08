import fs from "fs/promises";
import path from "path";

export async function getSnippet(file: string) {
   const filePath = path.join(process.cwd(), "public/code_snippets", file);
   return fs.readFile(filePath, "utf-8");
}
