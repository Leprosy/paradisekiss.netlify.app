const logoSoloParadise = new Proxy({"src":"/_astro/logo-solo-paradise.CRs4_8Aa.png","width":842,"height":596,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/logo-solo-paradise.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/logo-solo-paradise.png");
							return target[name];
						}
					});

export { logoSoloParadise as default };
