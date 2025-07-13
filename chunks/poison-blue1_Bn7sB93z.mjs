const poisonBlue1 = new Proxy({"src":"/_astro/poison-blue1.BITngP02.jpg","width":799,"height":577,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/poison-blue1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/poison-blue1.jpg");
							return target[name];
						}
					});

export { poisonBlue1 as default };
