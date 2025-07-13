const gatitaAzul1 = new Proxy({"src":"/_astro/gatita-azul1.o8fLzGtT.jpg","width":1066,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul1.jpg");
							return target[name];
						}
					});

export { gatitaAzul1 as default };
