import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJMZskuE.mjs';
import cbLogo from '../chunks/logo-cb_DJlFNNE6.mjs';
import img3 from '../chunks/logo-che_DH8_b4A5.mjs';
import img4 from '../chunks/logo-buenos-mesa_C3fCxQPg.mjs';
export { renderers } from '../renderers.mjs';

const $$CheBurlesque = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-black text-amber-200"> <div class="mx-auto flex flex-col gap-2 items-center"> <img${addAttribute(cbLogo.src, "src")} class="w-[50vw]"> <img${addAttribute(img3.src, "src")} class="w-[50vw]"> <img${addAttribute(img4.src, "src")} class="w-[30vw]"> </div>
Che burlesque Che burlesque
</div>
OAW!
` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/che-burlesque.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/che-burlesque.astro";
const $$url = "/che-burlesque";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CheBurlesque,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
