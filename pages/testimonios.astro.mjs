import { c as createComponent, r as renderComponent, b as addAttribute, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Content } from '../chunks/Content_Cgv6Oyks.mjs';
import { a as $$ContentTitle, $ as $$ContentParagraph } from '../chunks/ContentTitle_hfO3Y2ae.mjs';
import testimonios from '../chunks/testimonios_BJFApaoQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": "Testimonios / Prensa" })} ${renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="mb-5 text-2xl">Prensa y medios</p> <p class="mb-10">
He sido entrevistada y destacada en diversos medios, desde radios y podcasts hasta diarios culturales, festivales
      y cortometrajes. Acá podés ver algunas de esas participaciones:
</p> <p class="mb-5 text-2xl">Testimonios del público</p> <p class="mb-5">Opiniones reales de quienes vivieron mis shows:</p> <ol class="mb-5 gap-5 flex flex-col"> <li>✨ "No sabés si reírte, enamorarte o aplaudir de pie." –Claudia, cumpleañera.</li> <li>✨ "Nunca vi una despedida tan elegante y divertida a la vez." –Caro, hermana de la novia.</li> <li>✨ "Una experiencia sensual y artística que eleva el nivel del evento." –Encargado de evento corporativo.</li> </ol> ` })} ` })} <img${addAttribute(testimonios.src, "src")} class="mx-auto lg:w-[30vw] md:w-[50vw]">`;
}, "/Users/miguel/Development/astro-demo/src/pages/testimonios.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/testimonios.astro";
const $$url = "/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
