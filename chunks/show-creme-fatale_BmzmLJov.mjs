const showCremeFatale = new Proxy({"src":"/_astro/creme-fatale1.D1D9wJBA.jpg","width":1599,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/show-creme-fatale.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/show-creme-fatale.jpg");
							return target[name];
						}
					});

export { showCremeFatale as default };
