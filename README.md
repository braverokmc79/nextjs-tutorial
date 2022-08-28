## Next js 강좌 [코딩앙마]

- 1.소개, 페이지 레이아웃 (Intro, Page layout)

- 2.Dynamic Routes, next/link

- 3.서버사이드 렌더링 (Server-side Rendering/SSR/Dynamic Rendering)

- 4.에러 페이지, 환경 변수 (Custom Error Page, Environment Variables)

- 5.정적 생성(Static Generation) - getStaticProps, getStaticPaths

- 6.isFallback, getStaticPaths

- 7.API Routes, 로그인 구현



[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages)로 부트스트랩된 [Next.js](https://nextjs.org/) 프로젝트입니다. /create-next-app).

## 시작하기

먼저 개발 서버를 실행합니다.

```bash
npm run dev
# or
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

'pages/index.js'를 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

[API 경로](https://nextjs.org/docs/api-routes/introduction)는 [http://localhost:3000/api/hello](http://localhost:3000/api/hello)에서 접근할 수 있습니다. ). 이 끝점은 `pages/api/hello.js`에서 편집할 수 있습니다.

`pages/api` 디렉토리는 `/api/*`에 매핑됩니다. 이 디렉토리의 파일은 React 페이지가 아닌 [API route](https://nextjs.org/docs/api-routes/introduction)로 취급됩니다.

## 더 알아보기

Next.js에 대해 자세히 알아보려면 다음 리소스를 살펴보세요.

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능 및 API에 대해 알아보세요.
- [Learn Next.js](https://nextjs.org/learn) - 대화형 Next.js 튜토리얼.

[Next.js GitHub 저장소](https://github.com/vercel/next.js/)를 확인할 수 있습니다. 피드백과 기여를 환영합니다!

## Vercel에 배포

Next.js 앱을 배포하는 가장 쉬운 방법은 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app -readme) Next.js 제작자로부터.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment)를 확인하세요.
