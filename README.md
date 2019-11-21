# svelte-typescript
svelte-typescript 개발 도입 문서

### Install packages
```bash
$ yarn
```

### Start development server
```bash
$ yarn serve
```

### Build for production
```bash
$ yarn build
```

## Sverte 설치
```bash
$ npx degit sveltejs/template my-svelte-project
$ cd my-svelte-project
$ npm i
$ npm run dev
```

# package 추가 문서
### TypeScript
초기 세팅부터 typescript 녹이다 삽질을 너무 많이함. 

rollup설정을 제대로 했는데 ts import 시 파일을 찾질 못함...원인 못찾...

결국 [여기서](https://github.com/dafn/svelte-typescript-rollup) 가져옴...
```
$ npm i --save-dev rollup-plugin-typescript2
$ npm i --save-dev typescript
$ touch tsconfig.json
```

#### roullup.config.js 설정
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

#### Svelte Preprocess
A [Svelte](https://svelte.dev/) preprocessor with support for: PostCSS, SCSS, Less, Stylus, Coffeescript, TypeScript and Pug.
```
$ npm i --save-dev svelte-preprocess
```

#### Router 추가
[svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router): Svelte3 전용이며 SPA에 최적화 되어있다.
SEO 향상이 필요하다면 [SAPPER](https://sapper.svelte.dev/)로 접근한다.

SPA, SSR 참고 문서 : 
[SPA와 SSR의 장단점 그리고 Nuxt.js](https://medium.com/aha-official/%EC%95%84%ED%95%98-%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EA%B8%B0-1-spa%EC%99%80-ssr%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EA%B7%B8%EB%A6%AC%EA%B3%A0-nuxt-js-cafdc3ac2053) 

```
$ npm i --save-dev svelte-spa-router
```

#### UI Framework 'sveltestrap' 추가

[svelte-material-ui](https://github.com/hperrin/svelte-material-ui)를 추가하려했으나 아직 TS를 지원하지 않아 적용하는데 번거로움. 간단한 UI만 필요하기때문에 부트스트랩에 녹인 [sveltestrap](https://github.com/bestguy/sveltestrap) 을 적용함.

package.json
```
$ npm i --save bootstrap sveltestrap
```
App.svelte 또는 index.html css 추가
```
<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>
```
#### Css Sass 추가
전에 분명 'svelte-preprocess' 가이드에 따라서 rollup.comfig에 추가했는데 scss가 안먹힘.

구글 검색에서 [Svelte / Sapper with Sass!](https://medium.com/@sean_27490/svelte-sapper-with-sass-271fff662da9)문서를 보고 적용함.
```
npm i -D svelte-preprocess autoprefixer node-sass

- style
<style lang="scss"></style>

- rollup.config.js
const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});
...
export default {
  client: {
    plugins: [
      svelte({
        // ...
        preprocess, // <-- ADD THIS LINE
      }),
  },
  server: {
    plugins: [
      svelte({
       // ...
        preprocess, // <-- HERE TOO
      }),
    ],
  },
};
```

---

## TODOLIST
- ~~Typesciprt 적용~~
- ~~router ts Error Fixed~~
- ~~UI Framework 적용~~
- SvelteGuide 페이지 작성
- AWS API 연동
- Build 체크
- README 문서 정리

#### 모듈 import 
ts 파일에서 모듈 import 할때 모듈을 찾지 못함: 파일 호환성 이슈

차후 @type/* 업데이트 시 확인 필요.

참고 문서 : 

- [타입스크립트 컴파일러가 모듈 타입 선언을 참조하는 과정](https://medium.com/naver-fe-platform/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC%EA%B0%80-%EB%AA%A8%EB%93%88-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8%EC%9D%84-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-%EA%B3%BC%EC%A0%95-5bfc55a88bb6)
- [타입스크립트의 네임스페이스와 모듈
](https://edykim.com/ko/post/namespaces-and-modules-in-type-scripts/)

