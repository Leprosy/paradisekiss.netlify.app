const img2 = new Proxy({"src":"/_astro/quien-soy2.ByufjkAM.jpg","width":853,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/quien-soy2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/quien-soy2.jpg");
							return target[name];
						}
					});

export { img2 as default };
