# 🗓️ 위클리

## 🥡 의존성 설치하기

```shell
yarn
```

## 💻 개발하기

- 환경변수 예시 복사 후 설정

`apps` 폴더 내부에 있는 각 앱별로 환경 변수를 설정해야한다.

`turbo`의 `globalEnv`와 `globalDependencies`가 정상적으로 동작하지 않는 것 같다. ~~(아마도)~~

```shell
cp .env.example .env
```

- 서비스 워커 설정하기

`msw`를 이용하는 각 프로젝트 별로 실행

```shell
cd apps/admin && yarn msw init ./public
cd ../../ # root로 이동
cd apps/attendance && yarn msw init ./public
```

- 개발서버 켜기

```shell
yarn dev
```

- 개발서버 포트 정보

|    App     |  Port   |
| :--------: | :-----: |
| attendance | `:3000` |
|   admin    | `:3001` |
|     qr     | `:3002` |

## 🏛️ 프로젝트 구조

```
/
├── apps
│   ├── admin                // 관리자 웹 애플리케이션
│   ├── attendance           // 사용자 출석 웹 어플리케이션
│   └── qr                   // QR 코드 웹 어플리케이션
└── packages
    ├── api                  // API 관련 공통 패키지
    ├── eslint-config-weekly // eslint 규칙 공통 패키지
    ├── tsconfig             // typescript 설정 공통 패키지
    └── ui                   // UI 컴포넌트 공통 패키지
```

## 🐥 팀구성

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/zi-gae">
        <img
          src="https://avatars.githubusercontent.com/u/39829378?v=4?s=100"
          width="100px;"
          alt="zi-gae"
        />
        <br />
        <sub>
         <b>정건우 (22기)</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alstn2468">
        <img
          src="https://avatars.githubusercontent.com/u/30997311?v=4?s=100"
          width="100px;"
          alt="alstn2468"
        />
        <br />
        <sub>
          <b>김민수 (22기)</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/9yujin">
        <img
          src="https://avatars.githubusercontent.com/u/55226431?v=4?s=100"
          width="100px;"
          alt="9yujin"
        />
        <br />
        <sub>
          <b>한규진 (22기)</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<div align='center'>
  <sub>
    <sup>
      NEXTERS 22nd CHULCHUL
    </sup>
  </sub>
</div>
