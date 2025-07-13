const trenNocturno4 = new Proxy({"src":"/_astro/tren-nocturno4.Bc82CzIy.jpg","width":800,"height":533,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno4.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno4.jpg");
							return target[name];
						}
					});

export { trenNocturno4 as default };
