import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Content } from '../chunks/Content_Cgv6Oyks.mjs';
import { a as $$ContentTitle, $ as $$ContentParagraph } from '../chunks/ContentTitle_hfO3Y2ae.mjs';
import { $ as $$Thumbnail } from '../chunks/Thumbnail_CKublrxe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const creme = "show-creme-fatale.jpg";
  const gatita = "show-gatita-azul.jpg";
  const renaissance = "show-renaissance.jpg";
  const tren = "tren-nocturno1.jpg";
  const poison = "poison-blue1.jpg";
  const bella = "mi-bella-genio1.jpg";
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": "Cat\xE1logo" })} ${renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="mb-5">El arte de seducir con elegancia</p> <p class="mb-5">
Shows creados para encantar y emocionar, adaptados con sensibilidad a cada tipo de espacio y ocasión:
</p> <ol class="mb-5"> <li>Hoteles y restaurantes – Cenas show íntimas y sofisticadas.</li> <li>Casinos y teatros – Espectáculos escénicos con despliegue artístico.</li> <li>Eventos corporativos – Intervenciones elegantes con guiños de humor y sensualidad.</li> <li>Celebraciones privadas – Bodas, cumpleaños o despedidas con glamour.</li> <li>Bares y cafés concert – Formatos versátiles y adaptables, con interacción y picardía.</li> <li>Ferias y festivales – Shows breves o performáticos para atraer al público general.</li> </ol> <p class="mb-5">
Propuestas visuales, teatrales y sensuales, con posibilidad de incluir recepción, animación, juegos con el
      público, talleres o el icónico show de La Copa Gigante. Descargá el catálogo y encontrá el formato ideal para tu
      evento.
</p> ` })} <div class="flex flex-wrap gap-5 justify-center"> ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Renaissance", "href": "/shows/renaissance", "src": renaissance })} ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Creme Fatale", "href": "/shows/creme-fatale", "src": creme })} ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Gatita Azul", "href": "/shows/gatita-azul", "src": gatita })} ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Tren Nocturno", "href": "/shows/tren-nocturno", "src": tren })} ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Poison Blue", "href": "/shows/poison-blue", "src": poison })} ${renderComponent($$result2, "Thumbnail", $$Thumbnail, { "title": "Show Mi Bella Genio", "href": "/shows/mi-bella-genio", "src": bella })} </div> ` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/performances/index.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/performances/index.astro";
const $$url = "/performances";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
