const img3 = new Proxy({"src":"/_astro/logo-che.C-Bj70aB.png","width":736,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/logo-che.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/logo-che.png");
							return target[name];
						}
					});

export { img3 as default };
