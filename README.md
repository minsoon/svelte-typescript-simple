
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
A [Svelte](https://svelte.dev/) preprocessor with support for: PostCSS, SCSS, Less, Stylus, Coffeescript, TypeScript and Pug.
```
$ npm i --save-dev svelte-preprocess
```

## Router 추가
[svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router): Svelte3 전용이며 SPA에 최적화 되어있다.
SEO 향상이 필요하다면 [SAPPER](https://sapper.svelte.dev/)로 접근한다.

SPA와 SSR 참고 문서 : 
[SPA와 SSR의 장단점 그리고 Nuxt.js](https://medium.com/aha-official/%EC%95%84%ED%95%98-%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-spa%EC%99%80-ssr%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nuxt-js-cafdc3ac2053) 

```
$ npm i --save svelte-spa-router
```

## TODOLIST
- router ts Error Fixed
- SvelteGuide 페이지 작성
- AWS API 연동
- Build 체크
- README 문서 정리