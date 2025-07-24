# Semantic Release Automated Changelog

## [4.1.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v4.1.0...v4.1.1) (2025-07-24)


### Bug Fixes

* add themeable type classes ([bea5d2c](https://github.com/AlaskaAirlines/auro-carousel/commit/bea5d2c42bdf46ec528d5f34ca51030e6368d48d))
* linter errors ([b76de2a](https://github.com/AlaskaAirlines/auro-carousel/commit/b76de2a2ac6b134ac30a370502ccee352a2b440c))
* update docs head content ([d5c6b0a](https://github.com/AlaskaAirlines/auro-carousel/commit/d5c6b0a516ca583bca3e73264a5df9235f12ff6c))

# [4.1.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v4.0.2...v4.1.0) (2025-05-30)


### Features

* add CSS Part to enable styling ([2116ae1](https://github.com/AlaskaAirlines/auro-carousel/commit/2116ae199720d662b8b0af1c646e6d96e24fa6e3))

## [4.0.2](https://github.com/AlaskaAirlines/auro-carousel/compare/v4.0.1...v4.0.2) (2025-04-28)


### Performance Improvements

* update to use new color theming tokens [#81](https://github.com/AlaskaAirlines/auro-carousel/issues/81) ([592f485](https://github.com/AlaskaAirlines/auro-carousel/commit/592f48562f5c2a92e2d250b51e2567ada6a4bba1))

## [4.0.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v4.0.0...v4.0.1) (2025-04-08)


### Performance Improvements

* add wca script for docs api ([b7febe0](https://github.com/AlaskaAirlines/auro-carousel/commit/b7febe0e1a33812b424cb199c83d8ff24383772b))

# [4.0.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.2.4...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([fffe40d](https://github.com/AlaskaAirlines/auro-carousel/commit/fffe40dcdb4c37aef4e04c2484701482c885dc2d))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.2.4](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.2.3...v3.2.4) (2025-02-08)


### Performance Improvements

* update dependencies ([c59a216](https://github.com/AlaskaAirlines/auro-carousel/commit/c59a216531ff1a3f297e0d035019ca3d54552db9))
* update mixin per new WCSS spec ([f3631b7](https://github.com/AlaskaAirlines/auro-carousel/commit/f3631b72f532ed63202deed9ee3e3f617af80cc0))

## [3.2.3](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.2.2...v3.2.3) (2024-12-20)


### Performance Improvements

* update node to version 22 ([523b2df](https://github.com/AlaskaAirlines/auro-carousel/commit/523b2dfac58496feba50275fab5025014a91866a))

## [3.2.2](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.2.1...v3.2.2) (2024-12-17)


### Bug Fixes

* improve mobile UX for scroll behavior [#65](https://github.com/AlaskaAirlines/auro-carousel/issues/65) ([2c77ebc](https://github.com/AlaskaAirlines/auro-carousel/commit/2c77ebc5ddec33388cd5633989392ab534991f30))

## [3.2.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.2.0...v3.2.1) (2024-12-03)


### Performance Improvements

* update all dependencies ([d165bb9](https://github.com/AlaskaAirlines/auro-carousel/commit/d165bb9c7df82aec6357e0b6eb05698113c4ad8d))

# [3.2.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.1.1...v3.2.0) (2024-11-15)


### Features

* upgrade auro-library to 3.0.1 ([886f52b](https://github.com/AlaskaAirlines/auro-carousel/commit/886f52b40be5098b633afc1efc5de5a438ea5b9f))


### Performance Improvements

* update library to 3.0.2 ([3a9464f](https://github.com/AlaskaAirlines/auro-carousel/commit/3a9464f647ec94cdf156509d981842dadef59170))

## [3.1.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.1.0...v3.1.1) (2024-11-05)


### Bug Fixes

* add correct gradient behavior [#47](https://github.com/AlaskaAirlines/auro-carousel/issues/47) [#51](https://github.com/AlaskaAirlines/auro-carousel/issues/51) ([5c5b5e4](https://github.com/AlaskaAirlines/auro-carousel/commit/5c5b5e4a093e49c2075dd01ebff2797e973561ed))


### Performance Improvements

* cleanup bundle ([f3086db](https://github.com/AlaskaAirlines/auro-carousel/commit/f3086dba51103676e6c83024ebf2c3daa007aa46))

# [3.1.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.0.1...v3.1.0) (2024-10-25)


### Features

* **api:** add register static method [#57](https://github.com/AlaskaAirlines/auro-carousel/issues/57) ([9e74ae4](https://github.com/AlaskaAirlines/auro-carousel/commit/9e74ae466961ea66eb7e6d18033a7f883470f18d))

## [3.0.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v3.0.0...v3.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#55](https://github.com/AlaskaAirlines/auro-carousel/issues/55) ([6b0ed22](https://github.com/AlaskaAirlines/auro-carousel/commit/6b0ed22513121aef6c5fab5c237cbb3d6345b184))

# [3.0.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.7...v3.0.0) (2024-09-30)


### Features

* add tag name as attribute when custom registered ([7699c0c](https://github.com/AlaskaAirlines/auro-carousel/commit/7699c0cb75446b296b452c41ce11ef4256ebb6a4))
* **theming:** implement tier 3 tokens for theming support [#44](https://github.com/AlaskaAirlines/auro-carousel/issues/44) ([a6def0b](https://github.com/AlaskaAirlines/auro-carousel/commit/a6def0b0edc66c4770a4dafd5fdc45a5f1244640))
* **version:** implement custom versioned auro components ([d8166bf](https://github.com/AlaskaAirlines/auro-carousel/commit/d8166bfa9109730b2b5d822d6711c662633e4ce2))


### Performance Improvements

* refactor custom component registration config ([59c6b0c](https://github.com/AlaskaAirlines/auro-carousel/commit/59c6b0cf7c8cdf448d5ed53515ee2e94129c98f5))
* update dependencies ([db6ec49](https://github.com/AlaskaAirlines/auro-carousel/commit/db6ec49db16db7eaa8cd05a057ecf10d21d9b533))


### BREAKING CHANGES

* trigger major release for color theme support #44

## [2.2.7](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.6...v2.2.7) (2024-02-23)


### Performance Improvements

* **deps:** update dependencies ([44c30ce](https://github.com/AlaskaAirlines/auro-carousel/commit/44c30ceceaa2391e51507918a7ce03de681c8b45))
* **min:** update minified js system for docsite ([6ce9240](https://github.com/AlaskaAirlines/auro-carousel/commit/6ce9240abe84736b1196bb149f72472a6b570968))

## [2.2.6](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.5...v2.2.6) (2024-02-13)


### Performance Improvements

* **demo:** update demo file names [#40](https://github.com/AlaskaAirlines/auro-carousel/issues/40) ([16d883d](https://github.com/AlaskaAirlines/auro-carousel/commit/16d883dd389146b28d228c416a3f7e73c998c92c))

## [2.2.5](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.4...v2.2.5) (2024-02-13)


### Performance Improvements

* update auro dependencies ([9ad327f](https://github.com/AlaskaAirlines/auro-carousel/commit/9ad327ff2e7287a6974f0aa21ec7e3072089eea6))

## [2.2.4](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.3...v2.2.4) (2024-02-11)


### Performance Improvements

* update deps for ESM support ([ea4f12e](https://github.com/AlaskaAirlines/auro-carousel/commit/ea4f12e6db0793e4e3d3d3b75b3190d8f3df2b73))

## [2.2.3](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.2...v2.2.3) (2024-02-01)


### Performance Improvements

* update auro dependencies ([fbf4534](https://github.com/AlaskaAirlines/auro-carousel/commit/fbf4534565039d4d02d1f13ef8b8ec295f29ccbd))

## [2.2.2](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.1...v2.2.2) (2024-01-30)


### Performance Improvements

* **imports:** update docs and accordion import ([02dcc5e](https://github.com/AlaskaAirlines/auro-carousel/commit/02dcc5ed1ec8d87885c242cbd50c05dd5243d053))
* update repo with generator clean-install [#18](https://github.com/AlaskaAirlines/auro-carousel/issues/18) ([9aefc95](https://github.com/AlaskaAirlines/auro-carousel/commit/9aefc95de1e45794a25d62405a8486bdc79a3e42))

## [2.2.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.2.0...v2.2.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([5678137](https://github.com/AlaskaAirlines/auro-carousel/commit/5678137ea45e646ecc3fcc575093f325ad150b3a))

# [2.2.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.1.0...v2.2.0) (2024-01-21)


### Features

* add suport for SSR projects [#36](https://github.com/AlaskaAirlines/auro-carousel/issues/36) ([0496029](https://github.com/AlaskaAirlines/auro-carousel/commit/0496029275c194107dfeba644cae8d12061c2697))


### Performance Improvements

* update to support node js policy ([aa33893](https://github.com/AlaskaAirlines/auro-carousel/commit/aa33893bc56f08d25addbf688504341c0edb9406))

# [2.1.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.0.1...v2.1.0) (2023-11-16)


### Features

* **tokens:** update token prefix from auro to ds [#33](https://github.com/AlaskaAirlines/auro-carousel/issues/33) ([b8fbdeb](https://github.com/AlaskaAirlines/auro-carousel/commit/b8fbdebc0c7734267c9a29c5e31442e872195a16))


### Performance Improvements

* **gradient:** update gradient for light backgrounds [#32](https://github.com/AlaskaAirlines/auro-carousel/issues/32) ([da67c85](https://github.com/AlaskaAirlines/auro-carousel/commit/da67c850b21d3ffae78a21a8fae4a446f3dc8aef))

## [2.0.1](https://github.com/AlaskaAirlines/auro-carousel/compare/v2.0.0...v2.0.1) (2023-10-02)


### Bug Fixes

* remove ref to SCSS custom selectors ([3e4a44b](https://github.com/AlaskaAirlines/auro-carousel/commit/3e4a44b47dbec9731816833c37e394953e83b7bc))

# [2.0.0](https://github.com/AlaskaAirlines/auro-carousel/compare/v1.4.0...v2.0.0) (2023-09-05)


### Code Refactoring

* **base:** regenerate entire repo using latest generator version [#30](https://github.com/AlaskaAirlines/auro-carousel/issues/30) ([025a501](https://github.com/AlaskaAirlines/auro-carousel/commit/025a5017b33d69dde421dbcd33e74b42f29be552))


### BREAKING CHANGES

* **base:** name space changed to @aurodesignsystem

@ mend
