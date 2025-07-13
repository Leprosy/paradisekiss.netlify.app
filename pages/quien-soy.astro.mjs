import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import img1 from '../chunks/quien-soy1_DrYsd0c4.mjs';
import img2 from '../chunks/quien-soy2_F08uYLkl.mjs';
import { g as getImage } from '../chunks/_astro_assets_BS3979cN.mjs';
import { $ as $$Content } from '../chunks/Content_Cgv6Oyks.mjs';
export { renderers } from '../renderers.mjs';

const $$QuienSoy = createComponent(async ($$result, $$props, $$slots) => {
  const bgImage1 = await getImage({ src: img1 });
  const bgImage2 = await getImage({ src: img2 });
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white text-shadow-lg flex flex-wrap flex-row gap-5 lg:h-[90vh] justify-center"> <div class="order-2 lg:order-1 bg-no-repeat bg-bottom bg-contain flex-[1] h-[40vh] lg:h-[unset]"${addAttribute(`background-image: url(${bgImage1.src})`, "style")}></div> <div class="w-[100vw] lg:w-[30vw] order-1 lg:order-2 lg:max-h-[90vh] overflow-auto" style="scrollbar-width: none;"> <h1 class="text-6xl text-center my-5 text-purple-700">El Glamour</h1> <div class="text-center"> <h2 class="text-3xl text-purple-700 my-5">QUIEN SOY</h2> <h3 class="text-2xl text-purple-700 my-5">
"No hago shows para que me vean... hago arte para que no me olviden."
</h3> <p class="text-center text-xl p-5 mx-auto mb-5">
¿Quién es Paradise Kiss? Paradise Kiss es una artista argentina de burlesque con más de una década de
          experiencia escénica. Desde 2013 presenta espectáculos que combinan glamour vintage, humor, teatralidad,
          sensualidad y una profunda conexión con el público. Con base en Santiago de Chile, crea shows versátiles que
          reviven el encanto de los clubes de los años 50, incorporando elementos contemporáneos y un enfoque artístico
          que se adapta tanto a grandes escenarios como a espacios íntimos. Ganadora de festivales, performer y
          productora de “Che Burlesque”, Paradise combina danza, lipsync, canto y animación con una estética cuidada,
          elegante y sofisticada. Su objetivo es hacer del burlesque una experiencia inclusiva, memorable y disfrutable
          para todo tipo de público.
</p> </div> </div> <div class="order-3 bg-no-repeat bg-bottom bg-contain flex-[1] h-[40vh] lg:h-[unset]"${addAttribute(`background-image: url(${bgImage2.src})`, "style")}></div> </div> ` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/quien-soy.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/quien-soy.astro";
const $$url = "/quien-soy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienSoy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
