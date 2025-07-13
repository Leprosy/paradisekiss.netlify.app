const poisonBlue2 = new Proxy({"src":"/_astro/poison-blue2.DkTYF6jw.jpg","width":1280,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/poison-blue2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/poison-blue2.jpg");
							return target[name];
						}
					});

export { poisonBlue2 as default };
