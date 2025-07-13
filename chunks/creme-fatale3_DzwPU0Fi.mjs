const cremeFatale3 = new Proxy({"src":"/_astro/creme-fatale3.CJ1amdva.jpg","width":1066,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/creme-fatale3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/creme-fatale3.jpg");
							return target[name];
						}
					});

export { cremeFatale3 as default };
