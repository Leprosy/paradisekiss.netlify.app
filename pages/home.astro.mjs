import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { a as $$ContentTitle, $ as $$ContentParagraph } from '../chunks/ContentTitle_hfO3Y2ae.mjs';
import { $ as $$Content } from '../chunks/Content_Cgv6Oyks.mjs';
import image from '../chunks/home_BNNLOJ4Y.mjs';
import { g as getEntries } from '../chunks/_astro_content_GcRk6Uxk.mjs';
export { renderers } from '../renderers.mjs';

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const entries = await getEntries("performances");
  console.log("oaw", entries);
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": "El Glamour" })} ${renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}, { "default": async ($$result3) => renderTemplate`
Sensualidad escénica para experiencias elegantes y memorables. Descubrí el arte del burlesque con una estética
    refinada, teatral y sofisticada. Creado para encantar, emocionar y deleitar al público más exigente.
` })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row"> <ul class="text-2xl lg:text-3xl text-purple-700 text-center justify-center lg:justify-normal font-extralight flex flex-wrap flex-row lg:flex-col gap-5 md:gap-4 lg:gap-8"> <li><a href="/quien-soy">QUIEN SOY</a></li> <li>GALERÍA</li> <li><a href="/catalogo">CATÁLOGO</a></li> <li><a href="/performances">PERFORMANCES</a></li> <li>TRAYECTORIA ESCÉNICA</li> <li><a href="/testimonios">TESTIMONIOS/PRENSA</a></li> <li><a href="/redes">REDES/TALLERES</a></li> <li><a href="/contacto">CONTACTO</a></li> </ul> <div> <img${addAttribute(image.src, "src")}> </div> </div> ` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/home.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
