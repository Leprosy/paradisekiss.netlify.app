const miBellaGenio2 = new Proxy({"src":"/_astro/mi-bella-genio2.BiUOfPtF.jpg","width":683,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio2.jpg");
							return target[name];
						}
					});

export { miBellaGenio2 as default };
