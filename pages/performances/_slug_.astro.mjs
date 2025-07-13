import { c as createComponent, m as maybeRenderHead, d as renderSlot, a as renderTemplate, e as createAstro, r as renderComponent } from '../../chunks/astro/server_CAqNWn5V.mjs';
import 'kleur/colors';
import { a as $$ContentTitle, $ as $$ContentParagraph } from '../../chunks/ContentTitle_hfO3Y2ae.mjs';
import { $ as $$Content } from '../../chunks/Content_Cgv6Oyks.mjs';
import { $ as $$Thumbnail } from '../../chunks/Thumbnail_CKublrxe.mjs';
import 'clsx';
import { a as getEntry, b as getCollection } from '../../chunks/_astro_content_GcRk6Uxk.mjs';
export { renderers } from '../../renderers.mjs';

const $$ThumbnailGroup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-5 lg:flex-row flex-col my-5 justify-center flex-nowrap overflow-auto"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/miguel/Development/astro-demo/src/components/ThumbnailGroup.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("performances");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("performances", slug);
  if (!entry) {
    throw new Error(`Could not find blog post "${slug}"`);
  }
  const { title, paragraph, images } = entry.data;
  return renderTemplate`${renderComponent($$result, "Content", $$Content, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitle", $$ContentTitle, { "title": title })} ${renderComponent($$result2, "ContentParagraph", $$ContentParagraph, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="mb-5">${paragraph}</p> ` })} ${images.length > 0 && renderTemplate`${renderComponent($$result2, "ThumbnailGroup", $$ThumbnailGroup, {}, { "default": async ($$result3) => renderTemplate`${images.map((image) => renderTemplate`${renderComponent($$result3, "Thumbnail", $$Thumbnail, { "src": image })}`)}` })}`}` })}`;
}, "/Users/miguel/Development/astro-demo/src/pages/performances/[slug].astro", void 0);

const $$file = "/Users/miguel/Development/astro-demo/src/pages/performances/[slug].astro";
const $$url = "/performances/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
