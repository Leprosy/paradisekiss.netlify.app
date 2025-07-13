import { c as createComponent, m as maybeRenderHead, d as renderSlot, a as renderTemplate, e as createAstro } from './astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import 'clsx';

const $$ContentParagraph = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center text-xl mb-10"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/miguel/Development/astro-demo/src/components/ContentParagraph.astro", void 0);

const $$Astro = createAstro();
const $$ContentTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-center mb-10 text-purple-700">${title}</h1>`;
}, "/Users/miguel/Development/astro-demo/src/components/ContentTitle.astro", void 0);

export { $$ContentParagraph as $, $$ContentTitle as a };
