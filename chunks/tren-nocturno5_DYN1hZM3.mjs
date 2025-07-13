const trenNocturno5 = new Proxy({"src":"/_astro/tren-nocturno5.BhtFpaTS.jpg","width":800,"height":533,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno5.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno5.jpg");
							return target[name];
						}
					});

export { trenNocturno5 as default };
