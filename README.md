# [POC] React Native com Microfronts, Clean Architectures, Testes de unidade e Testes integrados
  Com o objetivo de paralelizar e facilitar a organização de grandes projetos para aplicações mobile, foi criado um POC (prove of concept) com uma aplicação principal, microfronts de jornadas dos modulos (pagamentos, empréstimo e pix) e packages de ferramentas para auxiliar na infraestrutura.

### Tecnologias usadas

- React Native
- Typescript
- React-Navigation
- Tsyringe (inject dependency to clean architecture)
- Axios
- Jest (teste de unidade)
- Detox (testes automatizados)

## Estrutura do projeto


Projeto
- e2e => Testes automatizados
  - actions => Ações referente as telas
  - flows => Fluxos de testes
  - screens => Telas e seus componentes
- packages => Microfronts e Package-tool
  - [core =>](https://github.com/marcelochb/poc-rn-microfront-core) Microfont com a regra de negócio (clean, testes unitários e estado global).
  - [interfaces =>](https://github.com/marcelochb/poc-rn-microfront-interfaces) Package-Tool com as interfaces de comunicação entre microfronts.
  - [loan =>](https://github.com/marcelochb/poc-rn-microfront-loan) Microfront com a jornada de empréstimo.
  - [payment =>](https://github.com/marcelochb/poc-rn-microfront-payment) Microfront com a jornada pagamentos.
  - [pix =>](https://github.com/marcelochb/poc-rn-microfront-pix) Microfront com a jornada de Pix.
  - [templates =>](https://github.com/marcelochb/poc-rn-microfront-templates) Package-Tool com o template das screens utilizadas pelos microfront de jornada..
  - [theme =>](https://github.com/marcelochb/poc-rn-microfront-theme) Package-Tool com a estrutura de tema para toda aplicação.
  - [uizx =>](https://github.com/marcelochb/poc-rn-microfront-uizx) Package-Tool de componentes usado para montar os templates.
- src
  - assets: Application images, videos, gifs and others.
  - config: Tools used by all project.
    - typescript: Declarations class.
  - routes: React Navigation config.
  - screens: Main app screens.

### Como compilar e rodar o projeto
- Faça o git clone de todos os microfronts e package-tool na pasta packages do projeto
  Exemplo:
    `cd packages`
    `git clone git@github.com:marcelochb/poc_rn_microfront_core.git core`
    `git clone git@github.com:marcelochb/poc_rn_microfront_interfaces.git interfaces`
    `git clone git@github.com:marcelochb/poc_rn_microfront_loan.git loan`
    etc...
- `yarn`
- `npx lerna bootstrap`
- `npx lerna run build`
Rodar Android
- `npx react-native run-android`
Rodar iOS
- `cd ios && pod install && cd ..`
- `npx react-native run-ios`

### Como rodar os teste automatizados
- `brew update && brew install node`
- `brew tap wix/brew;brew install applesimutils;`
- `npm install -g detox-cli`
- `detox build --configuration ios.sim.debug`
- `detox test --configuration ios.sim.debug`

### Como rodar os teste de unidade (depende do package core)
- `yarn test`
