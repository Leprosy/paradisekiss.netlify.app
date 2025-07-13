import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Content, a as $$Icon } from '../chunks/Content_Cgv6Oyks.mjs';
import { $ as $$ContentParagraph, a as $$ContentTitle } from '../chunks/ContentTitle_hfO3Y2ae.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const items = [
    {
      icon: "mail",
      link: "mailto:paradise.kiss.burlesque@gmail.com",
      text: "paradise.kiss.burlesque@gmail.com"
    },
    {
      icon: "global",
      link: "https://paradisekiss.netlify.app/",
      text: "https://paradisekiss.netlify.app/"
    },
    {
      icon: "ig",
      link: "https://instagram.com/paradise.kiss.burlesque",
      text: "@paradise.kiss.burlesque"
    },
    {
      icon: "youtube",
      link: "https://youtube.com/@paradise.kiss.burlesque",
      text: "https://youtu.be/paradise.kiss.burlesque"
    },
    {
      icon: "gps",
      link: "",
      text: "Santiago de Chile"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", ' <script type="text/javascript" src="https://form.jotform.com/jsform/251377783648068"><\/script> ', '<div class="relative top-[-4rem] md:top-[-10rem] bg-white"> <div class="flex flex-col gap-5 md:text-2xl w-[90vw] md:w-[50vw] mx-auto p-5"> ', " </div> </div> "])), renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": "Contacto" }), renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}), maybeRenderHead(), items.map((item) => renderTemplate`<div class="flex gap-2 items-center"> <span class="rounded-full bg-red-800 p-2 md:p-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": item.icon, "class": "text-white w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem]" })} </span> <a${addAttribute(item.link ? "_blank" : "", "target")}${addAttribute(item.link, "href")}> ${item.text} </a> </div>`)) })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/contacto.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
