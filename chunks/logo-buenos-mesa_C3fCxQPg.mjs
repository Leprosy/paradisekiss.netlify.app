const img4 = new Proxy({"src":"/_astro/logo-buenos-mesa.BJ4nRKdl.png","width":667,"height":102,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/logo-buenos-mesa.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/logo-buenos-mesa.png");
							return target[name];
						}
					});

export { img4 as default };
