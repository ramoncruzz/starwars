# Estrutura de diretórios

Este projeto foi configurado para a utlização de TypeScript e para obter a melhor organização possível do projeto `StarWars` está contém os seguintes diretórios:
[`components`](./components):

> Onde estão os códigos referentes a componentes visuais.

[`src/hooks`](./src/hooks).

> Neste diretório está presente o Hook customizado useStarWars. Seu uso é um exemplo prático de separação de responsabilidades. Neste projeto o useStarWars ficou responsável por controlar a requisição de novos personagens, paginação e cache.  
>  Em projetos maiores um Hook customizado pode ter mais responsabilidade, tais como processamento de dados para telas e implementação de regras de negócios em nível mobile.

> Vale ressaltar que neste diretório está presente o teste do Hook customizado. O teste foi simplificado e tem o propósito de ilustrar a viabilidade de reduzir a responsabilidade da tela com processamento de dados e delegar isso a um Hook customizado.

[`src/screens`](./src/screens).

> Neste diretório estão as duas telas principais do projeto, a Screen A e a Screen B.

[`src/services`](./src/services).

> Este é um dos diretórios fundamentais deste projeto. Nele estão os arquivos:

- (i)`starwars.service.js` - responsável por prover uma instância axios conectada ao domínio `https://swapi.dev`, neste projeto o uso deste arquivo foi minimo, porém ele pode ser utilizado para fazer interceptações nas requisições e injetar informações a header, tais como Bearer Token, atributos customizados entre outros;
- (ii)`starwars.api.ts` - responsável por fazer o mapeamento de rotas utilizadas pelo projeto.

[`src/util`](./src/util).

> Neste diretório encontram-se a função findOcurrencies(), utilizada na Screen A

# Dependências

- `@react-navigation `: Bibliteca de Navegação
- `axios`: Biblioteca de requisições http
- `git-cz`: Biblioteca de apoio a commits
- `@testing-library/react-hooks`: Biblioteca de teste de Hooks customizados

# Como executar o projeto

Ao baixar o projeto execute: `yarn install`.

> - [ios]: `yarn ios`
> - [android]: `yarn android`
