const showRenaissance = new Proxy({"src":"/_astro/show-renaissance.D7fQtii4.jpg","width":1599,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/show-renaissance.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/show-renaissance.jpg");
							return target[name];
						}
					});

export { showRenaissance as default };
