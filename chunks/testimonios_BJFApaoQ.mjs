const testimonios = new Proxy({"src":"/_astro/testimonios.3MhLCXk8.jpg","width":1599,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/testimonios.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/testimonios.jpg");
							return target[name];
						}
					});

export { testimonios as default };
