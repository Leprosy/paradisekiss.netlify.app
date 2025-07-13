const cbLogo = new Proxy({"src":"/_astro/logo-cb.By3bA3_7.png","width":842,"height":596,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/logo-cb.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/logo-cb.png");
							return target[name];
						}
					});

export { cbLogo as default };
