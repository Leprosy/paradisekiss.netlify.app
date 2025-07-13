import { c as createComponent, e as createAstro, r as renderComponent, j as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJMZskuE.mjs';
import logo from '../chunks/logo-paradise_DNkQr7v8.mjs';
import { g as getImage } from '../chunks/_astro_assets_BS3979cN.mjs';
import img3 from '../chunks/logo-che_DH8_b4A5.mjs';
import img4 from '../chunks/logo-buenos-mesa_C3fCxQPg.mjs';
export { renderers } from '../renderers.mjs';

const img1 = new Proxy({"src":"/_astro/portada1.Cttd_iMx.webp","width":1066,"height":1599,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/portada1.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/portada1.webp");
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/portada2.BM-Q3kTE.webp","width":1014,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/portada2.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/portada2.webp");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const bgImage1 = await getImage({ src: img1 });
  const bgImage2 = await getImage({ src: img2 });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-[80vh] relative"> <div id="paradise1" class="flex justify-center items-center bg-white bg-no-repeat bg-left-bottom bg-size-[auto_25rem] md:bg-size-[auto_60vw] lg:bg-size-[auto_40vw] h-[100%] w-[50vw]"${addAttribute(`background-image: url(${bgImage1.src})`, "style")}> <h2 class="z-10 text-purple-700 text-4xl text-shadow-xs text-shadow-black relative top-[18rem] md:top-[15rem] animate-pulse"> <a href="home">El Glamour</a> </h2> </div> <div id="paradise2" class="flex justify-center items-center bg-black bg-no-repeat bg-right-bottom bg-size-[auto_25rem] md:bg-size-[auto_60vw] lg:bg-size-[auto_40vw] h-[100%] w-[50vw]"${addAttribute(`background-image: url(${bgImage2.src})`, "style")}> <h2 class="z-10 text-purple-700 text-4xl text-shadow-xs text-shadow-purple-300 relative top-[18rem] md:top-[15rem] animate-pulse"> <a href="home">El Deseo</a> </h2> </div> </div> <div id="logo" class="absolute top-[5vh] left-0 w-[100vw] flex justify-center opacity-0 transition-opacity duration-3000"> <div> <img${addAttribute(logo.src, "src")} class="w-[15rem] md:w-[20rem] lg:w-[25rem]"> </div> </div> <div class="align-middle bg-gradient-to-r from-purple-600 via-purple-950 to-purple-600 h-[20vh]"> <div class="flex flex-col justify-center items-center h-[100%]"> <img${addAttribute(img3.src, "src")} class="h-[3rem] animate-pulse"> <img${addAttribute(img4.src, "src")} height="10" class="h-[2rem] animate-pulse"> </div> </div> ` })} ${renderScript($$result, "/Users/miguel/Development/astro-demo/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/miguel/Development/astro-demo/src/pages/index.astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
