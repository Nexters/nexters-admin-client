# ποΈ μν΄λ¦¬

## π₯‘ μμ‘΄μ± μ€μΉνκΈ°

```shell
yarn
```

## π» κ°λ°νκΈ°

- νκ²½λ³μ μμ λ³΅μ¬ ν μ€μ 

`apps` ν΄λ λ΄λΆμ μλ κ° μ±λ³λ‘ νκ²½ λ³μλ₯Ό μ€μ ν΄μΌνλ€.

`turbo`μ `globalEnv`μ `globalDependencies`κ° μ μμ μΌλ‘ λμνμ§ μλ κ² κ°λ€. ~~(μλ§λ)~~

```shell
cp .env.example .env
```

- μλΉμ€ μμ»€ μ€μ νκΈ°

`msw`λ₯Ό μ΄μ©νλ κ° νλ‘μ νΈ λ³λ‘ μ€ν

```shell
cd apps/admin && yarn msw init ./public
cd ../../ # rootλ‘ μ΄λ
cd apps/attendance && yarn msw init ./public
```

- κ°λ°μλ² μΌκΈ°

```shell
yarn dev
```

- κ°λ°μλ² ν¬νΈ μ λ³΄

|    App     |  Port   |
| :--------: | :-----: |
| attendance | `:3000` |
|   admin    | `:3001` |
|     qr     | `:3002` |

## ποΈ νλ‘μ νΈ κ΅¬μ‘°

```
/
βββ apps
β   βββ admin                // κ΄λ¦¬μ μΉ μ νλ¦¬μΌμ΄μ
β   βββ attendance           // μ¬μ©μ μΆμ μΉ μ΄νλ¦¬μΌμ΄μ
β   βββ qr                   // QR μ½λ μΉ μ΄νλ¦¬μΌμ΄μ
βββ packages
    βββ api                  // API κ΄λ ¨ κ³΅ν΅ ν¨ν€μ§
    βββ eslint-config-weekly // eslint κ·μΉ κ³΅ν΅ ν¨ν€μ§
    βββ tsconfig             // typescript μ€μ  κ³΅ν΅ ν¨ν€μ§
    βββ ui                   // UI μ»΄ν¬λνΈ κ³΅ν΅ ν¨ν€μ§
```

## π₯ νκ΅¬μ±

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
         <b>μ κ±΄μ° (22κΈ°)</b>
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
          <b>κΉλ―Όμ (22κΈ°)</b>
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
          <b>νκ·μ§ (22κΈ°)</b>
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
