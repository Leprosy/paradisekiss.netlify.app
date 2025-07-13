const renaissance3 = new Proxy({"src":"/_astro/renaissance3.BuzNE4eJ.jpg","width":799,"height":630,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/renaissance3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/renaissance3.jpg");
							return target[name];
						}
					});

export { renaissance3 as default };
