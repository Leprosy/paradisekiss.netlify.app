const miBellaGenio3 = new Proxy({"src":"/_astro/mi-bella-genio3.BdEj7sU2.jpg","width":683,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/mi-bella-genio3.jpg");
							return target[name];
						}
					});

export { miBellaGenio3 as default };
