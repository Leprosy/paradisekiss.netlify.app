const logo = new Proxy({"src":"/_astro/logo-paradise.CLzcE1bN.png","width":354,"height":508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/miguel/Development/astro-demo/src/assets/images/logo-paradise.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/miguel/Development/astro-demo/src/assets/images/logo-paradise.png");
							return target[name];
						}
					});

export { logo as default };
