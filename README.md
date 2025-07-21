# AppRoter

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Sobre o Projeto

O **AppRoter** é uma aplicação Angular desenvolvida para demonstrar conceitos de roteamento e navegação utilizando tokens. O projeto faz parte do material didático da disciplina de Roteamento e Navegação, com foco em práticas modernas de desenvolvimento frontend.

### Funcionalidades

- Demonstração de rotas protegidas por autenticação de tokens
- Navegação entre diferentes componentes e páginas
- Estrutura modular para fácil manutenção e expansão
- Exemplos práticos de uso do Angular Router

### Objetivos

- Ensinar como implementar e proteger rotas em aplicações Angular
- Apresentar boas práticas de organização de código e navegação
- Fornecer um ponto de partida para projetos que utilizam autenticação baseada em tokens

### Estrutura do Projeto

O projeto está organizado em módulos, componentes e serviços, seguindo a arquitetura recomendada pelo Angular. Os principais diretórios incluem:

- `src/app/`: Código-fonte principal da aplicação
- `src/app/auth/`: Módulo de autenticação e gerenciamento de tokens
- `src/app/pages/`: Componentes de páginas acessíveis via rotas
- `src/app/shared/`: Componentes e serviços reutilizáveis

### Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- Angular CLI (versão 19.2.15 ou superior)

### Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
