const renaissance2 = new Proxy({"src":"/_astro/renaissance2.fCICzDsy.jpg","width":799,"height":641,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/renaissance2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/renaissance2.jpg");
							return target[name];
						}
					});

export { renaissance2 as default };
