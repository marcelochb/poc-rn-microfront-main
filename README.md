# [POC] React Native com Microfronts, Clean Architectures, Testes de unidade e Testes integrados
  Com o objetivo de paralelizar e facilitar a organização de grandes projetos para aplicações mobile, foi criado um POC (prove of concept) com uma aplicação principal, microfronts de jornadas dos modulos (pagamentos, empréstimo e pix) e packages de ferramentas para auxiliar na infraestrutura.

Demo:

![iOS Demo App](demo.gif)

### Tecnologias usadas

- React Native
- Typescript
- React-Navigation
- Tsyringe (inject dependency to clean architecture)
- Axios
- Jest (teste de unidade)
- Detox (testes automatizados)
- Redux

### Estrutura do projeto

- e2e => Testes automatizados
  - actions => Ações referente as telas
  - flows => Fluxos de testes
  - screens => Telas e seus componentes
- packages => Microfronts e Package-tool
  - core => Microfont com a regra de negócio (clean, testes unitários e estado global).
  - interfaces => Package-Tool com as interfaces de comunicação entre microfronts.
  - loan => Microfront com a jornada de empréstimo.
  - payment => Microfront com a jornada pagamentos.
  - pix => Microfront com a jornada de Pix.
  - templates => Package-Tool com o template das screens utilizadas pelos microfront de jornada..
  - theme => Package-Tool com a estrutura de tema para toda aplicação.
  - ui => Package-Tool de componentes usado para montar os templates.
- src
  - assets: Application images, videos, gifs and others.
  - config: Tools used by all project.
    - typescript: Declarations class.
  - routes: React Navigation config.
  - screens: Main app screens.

### Como compilar e rodar o projeto

- Faça o clone do projeto
```bash
git clone --recursive -j8 https://github.com/marcelochb/poc-rn-microfront-main.git
```
- Instale as dependências
```bash
yarn && npx lerna bootstrap
```
- Instalando e Iniciando Json Server
```bash
brew install json-server && json-server --watch db.json
```
- Rodar Android
```bash
yarn android
```
- Rodar iOS
```bash
yarn pod && yarn ios
```

### Como rodar os teste automatizados

- Instalar dependências
```bash
brew tap wix/brew && brew install applesimutils
```
- Instalar Detox-cli
```bash
npm install -g detox-cli
```
- Buildar e Rodar os testes
```bash
detox build --configuration ios.sim.debug && detox test --configuration ios.sim.debug
```

### Como rodar os teste de unidade (depende do package core)
- Instalar Detox-cli
```bash
yarn test --coverage=true
```
