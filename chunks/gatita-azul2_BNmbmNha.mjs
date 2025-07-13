const gatitaAzul2 = new Proxy({"src":"/_astro/gatita-azul2.CkXG_VlO.jpg","width":1066,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/gatita-azul2.jpg");
							return target[name];
						}
					});

export { gatitaAzul2 as default };
