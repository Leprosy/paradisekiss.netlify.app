import { c as createComponent, e as createAstro, b as addAttribute, i as renderHead, d as renderSlot, a as renderTemplate } from './astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
/* empty css                                 */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Paradise Kiss</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/miguel/Development/astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
