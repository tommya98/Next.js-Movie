# 🖼️ Next.js Movie

> Next.js로 만들어본 영화 웹사이트입니다.
>
> 노마드코더의 Next.js 강의를 바탕으로 제작되었습니다.
>   
> 질문과 피드백은 언제나 환영입니다. 🙂

<br>

## 📢 프로젝트 소개
> 최근 많이 사용되는 Next.js를 처음 사용하며 진행한 연습용 프로젝트 입니다.

<br>

## 🖱️ 데모 페이지
- [바로가기](https://next-js-movie-opal.vercel.app//)

<br>

## 🛠️ 기술 스택
<div style="display:flex; gap:5px">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

</div>

<br>

## 🏢 프로젝트 구조
```
nextjs-movie
 ┣ app
 ┃ ┣ (home)
 ┃ ┃ ┣ loading.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┣ (movies)
 ┃ ┃ ┗ movies
 ┃ ┃ ┃ ┗ [id]
 ┃ ┃ ┃ ┃ ┣ similar
 ┃ ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┃ ┃ ┃ ┣ error.tsx
 ┃ ┃ ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┃ ┃ ┣ loading.tsx
 ┃ ┃ ┃ ┃ ┗ page.tsx
 ┃ ┣ about
 ┃ ┃ ┗ page.tsx
 ┃ ┣ layout.tsx
 ┃ ┗ not-found.tsx
 ┣ assets
 ┃ ┗ defaultProfileImage.png
 ┣ components
 ┃ ┣ LoadingUI
 ┃ ┣ Movie
 ┃ ┣ MovieCredits
 ┃ ┣ MovieInfo
 ┃ ┣ MovieTab
 ┃ ┣ MovieVidoes
 ┃ ┣ Navigation
 ┃ ┗ SimilarMovies
 ┣ constant
 ┣ services
 ┃ ┗ movies
 ┣ styles
 ┃ ┗ global.css
 ┣ types
 ┣ .eslintrc.json
 ┣ .gitignore
 ┣ README.md
 ┣ next-env.d.ts
 ┣ next.config.mjs
 ┣ package.json
 ┣ postcss.config.js
 ┣ tailwind.config.ts
 ┣ tsconfig.json
 ┗ yarn.lock
```

<br>

## 📄 라이센스
이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 [LICENSE](https://github.com/tommya98/Next.js-Movie/blob/main/LICENSE) 파일을 참조해주세요.
