const trenNocturno3 = new Proxy({"src":"/_astro/tren-nocturno3.BJMyjc33.jpg","width":1066,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno3.jpg");
							return target[name];
						}
					});

export { trenNocturno3 as default };
