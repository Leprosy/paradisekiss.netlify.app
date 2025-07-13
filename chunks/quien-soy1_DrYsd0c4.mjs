const img1 = new Proxy({"src":"/_astro/quien-soy1.DPMI910V.jpg","width":853,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/quien-soy1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/quien-soy1.jpg");
							return target[name];
						}
					});

export { img1 as default };
