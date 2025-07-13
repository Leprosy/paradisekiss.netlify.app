const miBellaGenio1 = new Proxy({"src":"/_astro/mi-bella-genio1.B6m2ngyo.jpg","width":683,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio1.jpg");
							return target[name];
						}
					});

export { miBellaGenio1 as default };
