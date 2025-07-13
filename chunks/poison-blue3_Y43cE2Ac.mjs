const poisonBlue3 = new Proxy({"src":"/_astro/poison-blue3.Beh-NtGv.jpg","width":1280,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/poison-blue3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/poison-blue3.jpg");
							return target[name];
						}
					});

export { poisonBlue3 as default };
