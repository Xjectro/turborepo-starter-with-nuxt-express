import { readFile } from "fs/promises";
import path from "path";

export async function createPresentation({
  name,
  params,
  type,
  style,
}: {
  name: string;
  params: Record<string, string>;
  type: "email";
  style: "css" | "html";
}) {
  const template = await readFile(
    path.join(
      __dirname,
      "../../../presentation/",
      type,
      `/${name.replaceAll("-", "/")}.` + style,
    ),
    "utf-8",
  );

  const html = Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`{${key}}`, "g"), value),
    template,
  );

  return html;
}
