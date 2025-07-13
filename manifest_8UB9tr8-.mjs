import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_CAqNWn5V.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/miguel/Development/astro-demo/","cacheDir":"file:///Users/miguel/Development/astro-demo/node_modules/.astro/","outDir":"file:///Users/miguel/Development/astro-demo/dist/","srcDir":"file:///Users/miguel/Development/astro-demo/src/","publicDir":"file:///Users/miguel/Development/astro-demo/public/","buildClientDir":"file:///Users/miguel/Development/astro-demo/dist/client/","buildServerDir":"file:///Users/miguel/Development/astro-demo/dist/server/","adapterName":"","routes":[{"file":"file:///Users/miguel/Development/astro-demo/dist/catalogo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/che-burlesque/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/che-burlesque","isIndex":false,"type":"page","pattern":"^\\/che-burlesque\\/?$","segments":[[{"content":"che-burlesque","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/che-burlesque.astro","pathname":"/che-burlesque","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/performances/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/performances","isIndex":true,"type":"page","pattern":"^\\/performances\\/?$","segments":[[{"content":"performances","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/performances/index.astro","pathname":"/performances","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/quien-soy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/quien-soy","isIndex":false,"type":"page","pattern":"^\\/quien-soy\\/?$","segments":[[{"content":"quien-soy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quien-soy.astro","pathname":"/quien-soy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/redes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/redes","isIndex":false,"type":"page","pattern":"^\\/redes\\/?$","segments":[[{"content":"redes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/redes.astro","pathname":"/redes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/testimonios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonios","isIndex":false,"type":"page","pattern":"^\\/testimonios\\/?$","segments":[[{"content":"testimonios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonios.astro","pathname":"/testimonios","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/miguel/Development/astro-demo/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/miguel/Development/astro-demo/src/pages/home.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/home@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/miguel/Development/astro-demo/src/pages/performances/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/performances/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/miguel/Development/astro-demo/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/performances/index.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/quien-soy.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/redes.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/testimonios.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/che-burlesque.astro",{"propagation":"none","containsHead":true}],["/Users/miguel/Development/astro-demo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-page:src/pages/che-burlesque@_@astro":"pages/che-burlesque.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/performances/[slug]@_@astro":"pages/performances/_slug_.astro.mjs","\u0000@astro-page:src/pages/performances/index@_@astro":"pages/performances.astro.mjs","\u0000@astro-page:src/pages/quien-soy@_@astro":"pages/quien-soy.astro.mjs","\u0000@astro-page:src/pages/redes@_@astro":"pages/redes.astro.mjs","\u0000@astro-page:src/pages/testimonios@_@astro":"pages/testimonios.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_8UB9tr8-.mjs","/Users/miguel/Development/astro-demo/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/miguel/Development/astro-demo/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BUDdP7Su.mjs","/Users/miguel/Development/astro-demo/src/assets/images/creme-fatale1.jpg":"chunks/creme-fatale1_R4LSHMK6.mjs","/Users/miguel/Development/astro-demo/src/assets/images/creme-fatale2.jpg":"chunks/creme-fatale2_Cpwyjve3.mjs","/Users/miguel/Development/astro-demo/src/assets/images/creme-fatale3.jpg":"chunks/creme-fatale3_DzwPU0Fi.mjs","/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul1.jpg":"chunks/gatita-azul1_CNUT2PAi.mjs","/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul2.jpg":"chunks/gatita-azul2_BNmbmNha.mjs","/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul3.jpg":"chunks/gatita-azul3_DQlWJHDO.mjs","/Users/miguel/Development/astro-demo/src/assets/images/home.jpg":"chunks/home_BNNLOJ4Y.mjs","/Users/miguel/Development/astro-demo/src/assets/images/logo-buenos-mesa.png":"chunks/logo-buenos-mesa_C3fCxQPg.mjs","/Users/miguel/Development/astro-demo/src/assets/images/logo-cb.png":"chunks/logo-cb_DJlFNNE6.mjs","/Users/miguel/Development/astro-demo/src/assets/images/logo-che.png":"chunks/logo-che_DH8_b4A5.mjs","/Users/miguel/Development/astro-demo/src/assets/images/logo-paradise.png":"chunks/logo-paradise_DNkQr7v8.mjs","/Users/miguel/Development/astro-demo/src/assets/images/logo-solo-paradise.png":"chunks/logo-solo-paradise_CeHYXs5S.mjs","/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio1.jpg":"chunks/mi-bella-genio1_Cm05Qm8C.mjs","/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio2.jpg":"chunks/mi-bella-genio2_DsCr8yiW.mjs","/Users/miguel/Development/astro-demo/src/assets/images/quien-soy1.jpg":"chunks/quien-soy1_DrYsd0c4.mjs","/Users/miguel/Development/astro-demo/src/assets/images/quien-soy2.jpg":"chunks/quien-soy2_F08uYLkl.mjs","/Users/miguel/Development/astro-demo/src/assets/images/testimonios.jpg":"chunks/testimonios_BJFApaoQ.mjs","/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio3.jpg":"chunks/mi-bella-genio3_CxrNbVZl.mjs","/Users/miguel/Development/astro-demo/src/assets/images/poison-blue1.jpg":"chunks/poison-blue1_Bn7sB93z.mjs","/Users/miguel/Development/astro-demo/src/assets/images/poison-blue2.jpg":"chunks/poison-blue2_B6qMlCWF.mjs","/Users/miguel/Development/astro-demo/src/assets/images/poison-blue3.jpg":"chunks/poison-blue3_Y43cE2Ac.mjs","/Users/miguel/Development/astro-demo/src/assets/images/renaissance1.jpg":"chunks/renaissance1_Dvtsr8wu.mjs","/Users/miguel/Development/astro-demo/src/assets/images/renaissance2.jpg":"chunks/renaissance2_C956XxWo.mjs","/Users/miguel/Development/astro-demo/src/assets/images/renaissance3.jpg":"chunks/renaissance3_CmKlhOkh.mjs","/Users/miguel/Development/astro-demo/src/assets/images/show-creme-fatale.jpg":"chunks/show-creme-fatale_BmzmLJov.mjs","/Users/miguel/Development/astro-demo/src/assets/images/show-gatita-azul.jpg":"chunks/show-gatita-azul_FdjWg_8u.mjs","/Users/miguel/Development/astro-demo/src/assets/images/show-renaissance.jpg":"chunks/show-renaissance_DlhMtgJP.mjs","/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno1.jpg":"chunks/tren-nocturno1_9wtb7y4b.mjs","/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno2.jpg":"chunks/tren-nocturno2_pdRvPZyJ.mjs","/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno3.jpg":"chunks/tren-nocturno3_BbDf7CkT.mjs","/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno4.jpg":"chunks/tren-nocturno4_dEG5BHdW.mjs","/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno5.jpg":"chunks/tren-nocturno5_DYN1hZM3.mjs","/Users/miguel/Development/astro-demo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BZAL5yLx.mjs","/Users/miguel/Development/astro-demo/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.aw7WdDAz.js","/Users/miguel/Development/astro-demo/src/layouts/Content.astro?astro&type=script&index=0&lang.ts":"_astro/Content.astro_astro_type_script_index_0_lang.RpGP9Sa7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/miguel/Development/astro-demo/src/pages/index.astro?astro&type=script&index=0&lang.ts","setTimeout(()=>{document.querySelector(\"#logo\")?.classList.remove(\"opacity-0\")},1e3);"],["/Users/miguel/Development/astro-demo/src/layouts/Content.astro?astro&type=script&index=0&lang.ts","window.showModal=e=>{document.querySelector(\".modal\").classList.remove(\"hidden\"),document.querySelector(\".modal\").classList.add(\"fixed\"),document.querySelector(\".modal-content\").innerHTML=e};window.closeModal=()=>{document.querySelector(\".modal\").classList.add(\"hidden\"),document.querySelector(\".modal\").classList.remove(\"fixed\")};"]],"assets":["/file:///Users/miguel/Development/astro-demo/dist/catalogo/index.html","/file:///Users/miguel/Development/astro-demo/dist/che-burlesque/index.html","/file:///Users/miguel/Development/astro-demo/dist/contacto/index.html","/file:///Users/miguel/Development/astro-demo/dist/home/index.html","/file:///Users/miguel/Development/astro-demo/dist/performances/index.html","/file:///Users/miguel/Development/astro-demo/dist/quien-soy/index.html","/file:///Users/miguel/Development/astro-demo/dist/redes/index.html","/file:///Users/miguel/Development/astro-demo/dist/testimonios/index.html","/file:///Users/miguel/Development/astro-demo/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"IyFr2YZztSFqT8xBx30ZGVaKFzEnD2PXR5SqqlXQvjw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
