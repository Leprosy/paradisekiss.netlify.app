import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Content } from '../chunks/Content_Cgv6Oyks.mjs';
import { a as $$ContentTitle, $ as $$ContentParagraph } from '../chunks/ContentTitle_hfO3Y2ae.mjs';
export { renderers } from '../renderers.mjs';

const $$Redes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": "Redes / Talleres" })} ${renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="mb-5 text-2xl">Redes sociales & Detrás de la Pezonera</p> <p class="mb-10">
¿Querés ver qué hay detrás del show? En mis redes y en mi canal de YouTube “Detrás de la Pezonera”, comparto el
      backstage del burlesque: reflexiones, tips, entrevistas, experiencias, tutoriales, fragmentos de mis shows y todo
      lo que hace a este universo sensual y teatral.
</p> <p class="mb-5 text-2xl">Talleres y experiencias personalizadas</p> <p class="mb-5">
Burlesque no es solo para mirar: también se puede vivir.<br>Ofrezco talleres y experiencias que se adaptan a
      cada ocasión:
</p> <ol class="mb-5 gap-3 flex flex-col"> <li>✨ Tupperlesque para despedidas, cumpleaños o encuentros entre amigas.</li> <li>
💄 Clases personalizadas: burlesque clásico, manipulación de elementos (abanicos, pezoneras, guantes),
        maquillaje y peinado vintage, creación de vestuario o tocados.
</li> <li>🎭 Entrenamiento escénico para futuras performers o curiosas del arte del strip teatral.</li> <li>📦 Opcional: talleres con kits de elementos listos para usar o regalar.</li> <li>¿Querés sacar tu Femme Fatale interior o simplemente divertirte con estilo?</li> <li>💌 Consultá por disponibilidad y formatos presenciales o virtuales.</li> </ol> ` })} ` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/redes.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/redes.astro";
const $$url = "/redes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Redes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
