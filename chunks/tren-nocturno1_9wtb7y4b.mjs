const trenNocturno1 = new Proxy({"src":"/_astro/tren-nocturno1.5MydiT7v.jpg","width":1066,"height":1599,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/tren-nocturno1.jpg");
							return target[name];
						}
					});

export { trenNocturno1 as default };
