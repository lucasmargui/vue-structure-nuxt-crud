<H1 align="center">Estrutura Nuxt Crud</H1>
<p align="center">🚀 Estrutura Nuxt Crud para referências futuras</p>


## Criação de projeto Nuxt

```
npx nuxi@latest init vue-nuxt-crud
```

## Adicionando pacotes 

```
npm i bootstrap
npm i sweetalert2
npm i axios
```



## Adicionando configurações runtime

Acesse o endpoint https://mock-api.binaryboxtuts.com/ para resgatar a apiKey para ser utilizado nas requisições


<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/cfb5fa23-f34d-47b7-8e89-28a2f1eb19b1" style="width:100%">
</div>

### Configurando nuxt.config.ts

- apiUrl: uma URL para uma API (Interface de Programação de Aplicativos) que o programa irá interagir. Neste caso, o programa está configurado para interagir com uma API localizada em https://mock-api.binaryboxtuts.com.

- apiKey: Campo que será preenchido com a chave de API revelada para autenticação.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/b84d51d0-3ebb-4db2-9f4a-8a11cdb54cdd" style="width:100%">
</div>

## Services

- getProjects: Esta função é responsável por fazer uma requisição GET para obter todos os projetos da API. Ela utiliza o método $axiosApiClient.get() do Axios para fazer a requisição.

- getProject: Esta função recebe um parâmetro id e faz uma requisição GET para obter um projeto específico da API. Ela utiliza o método $axiosApiClient.get() do Axios, passando o ID na URL da requisição.

- createProject: Esta função recebe um objeto project como parâmetro e faz uma requisição POST para criar um novo projeto na API. Ela utiliza o método $axiosApiClient.post() do Axios, passando o objeto project como corpo da requisição.

- updateProject: Esta função recebe dois parâmetros, o id do projeto que deve ser atualizado e um objeto project com os novos dados do projeto. Ela faz uma requisição PATCH para atualizar o projeto na API. Ela utiliza o método $axiosApiClient.patch() do Axios, passando o ID na URL da requisição e o objeto project como corpo da requisição.

- deleteProject: Esta função recebe um parâmetro id e faz uma requisição DELETE para excluir um projeto da API. Ela utiliza o método $axiosApiClient.delete() do Axios, passando o ID na URL da requisição.



<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/33da6096-5593-4372-bbcf-83047d8f8dc4" style="width:100%">
</div>
<br>

## Plugins

axiosApitClient configura uma instância do Axios com uma URL base e um interceptor de solicitação para adicionar um cabeçalho personalizado. Em seguida, ele fornece essa instância customizada do Axios para o aplicativo Nuxt, permitindo que o aplicativo faça solicitações HTTP configuradas com essas opções específicas.

<br>
<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/a88852c9-5f23-4f55-a8ed-e72c9c5a65be" style="width:100%">
</div>

- import axios from 'axios';: Isso importa a biblioteca Axios, que é uma biblioteca JavaScript usada para fazer solicitações HTTP a partir do navegador ou do Node.js.

- export default defineNuxtPlugin((nuxtApp) => { ... });: Isso exporta um plugin Nuxt. O método defineNuxtPlugin é usado para definir um plugin Nuxt. Esse plugin recebe um argumento nuxtApp, que é a instância do aplicativo Nuxt.

- const runctimeConfig = useRuntimeConfig(): Isso chama uma função useRuntimeConfig() para obter a configuração de tempo de execução do aplicativo. Presumivelmente, isso é usado para obter informações de configuração específicas do ambiente em que o aplicativo está sendo executado.

- const axiosApiClient = axios.create(): Isso cria uma instância do Axios, que é uma instância customizada que pode ter configurações específicas.

- axiosApiClient.defaults.baseURL = runctimeConfig.public.apiUrl: Define a URL base para todas as solicitações feitas através dessa instância do Axios. A URL base é definida usando a configuração de tempo de execução apiUrl.

- axiosApiClient.interceptors.request.use(function (config) { ... });: Isso adiciona um interceptor de solicitação ao Axios. Os interceptors são funções que são executadas antes de uma solicitação ser enviada. Neste caso, a função adiciona um cabeçalho personalizado X-Binarybox-Api-Key à solicitação, usando a chave API obtida da configuração de tempo de execução apiKey.

- return { provide: { axiosApiClient: axiosApiClient, }, };: Isso retorna um objeto que será fornecido pelo Nuxt para o aplicativo. Esse objeto fornece a instância customizada do Axios para o aplicativo, permitindo que o aplicativo acesse facilmente a instância do Axios configurada com as configurações necessárias.




## Read

// pages/index.vue


<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/b997c881-d4e5-4428-8281-cb2b1d03fb16" style="width:100%">
</div>

## Create

// pages/create.vue

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/083c4fc3-6af1-46db-a1a4-b2b314a996c8" style="width:100%">
</div>


## Edit

// pages/edit/[id].vue

<div align="center">
  <h3>Get Project</h3>
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/fb407644-c5aa-412f-a418-3d1f54d5cafb" style="width:100%">
</div>

<br>

<div align="center">
   <h3>Update Project</h3>
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/d51c957a-4935-4f8b-99fa-e19505b39b12" style="width:100%">
</div>

















