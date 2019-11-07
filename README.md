
# svelte-typescript
svelte-typescript 개발 도입 문서

## Sverte 설치
```bash
$ npx degit sveltejs/template my-svelte-project
$ cd my-svelte-project
$ npm i
$ npm run dev
```

# package 추가 문서
## TypeScript
```
$ npm i --save-dev rollup-plugin-typescript2
$ npm i --save-dev typescript
$ touch tsconfig.json
```

### roullup.config.js 설정
```
import typescript from "rollup-plugin-typescript2";
import typescriptCompiler from "typescript";

export default {
    ...
	plugins: [
		typescript({ typescript: typescriptCompiler })
	]
    ...
};

```

## Svelte Preprocess
A Svelte preprocessor with support for: PostCSS, SCSS, Less, Stylus, Coffeescript, TypeScript and Pug.
```
$ npm i --save-dev svelte-preprocess
```

    // "rollup-plugin-bundle-html": "^0.2.1",
    // "rollup-plugin-css-porter": "^1.0.2",
    // "rollup-plugin-serve": "^1.0.1"