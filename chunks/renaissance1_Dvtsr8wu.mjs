const renaissance1 = new Proxy({"src":"/_astro/renaissance1.vFNmLo4r.jpg","width":1080,"height":719,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/renaissance1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/renaissance1.jpg");
							return target[name];
						}
					});

export { renaissance1 as default };
