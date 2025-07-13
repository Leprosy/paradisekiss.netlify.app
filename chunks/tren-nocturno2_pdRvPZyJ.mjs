const trenNocturno2 = new Proxy({"src":"/_astro/tren-nocturno2.CfdIMgtb.jpg","width":1066,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno2.jpg");
							return target[name];
						}
					});

export { trenNocturno2 as default };
