import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect, beforeEach } from "vitest";

const __dirname = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(__dirname, "../index.html"), "utf-8");

describe("index.html smoke tests", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it("sets the page title", () => {
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
    expect(title.textContent).toBe("The MonroePost");
  });

  it("renders the heading", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain("The MonroePost");
  });

  it("renders the welcome message", () => {
    const paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(paragraphs[0].textContent).toContain("family domain");
  });

  it("includes the hero image", () => {
    const img = document.querySelector("img");
    expect(img).not.toBeNull();
    expect(img.getAttribute("src")).toBe("/src/flowers.jpg");
  });

  it("loads the main.js module script", () => {
    const script = document.querySelector('script[type="module"]');
    expect(script).not.toBeNull();
    expect(script.getAttribute("src")).toBe("/src/main.js");
  });
});
