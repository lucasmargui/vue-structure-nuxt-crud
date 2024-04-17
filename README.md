
<H1 align="center">Nuxt Crud Structure</H1>
<p align="center">🚀 Nuxt Crud framework for future references</p>



## Requirements

- Nuxt
- bootstrap
- sweetalert
- axios

<div align="center">
 <h3>Home</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/06a27802-20c8-4603-9ffb-6135333dd4b6" style="width:100%">
 <br>
 <h3>Delete</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/9eceb47a-146f-417a-ac25-1107617bd3b1" style="width:100%">
 <br>
 <h3>Operation completed successfully</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/78dc091e-2a5d-4195-b352-23333db25d70" style="width:100%">
</div>

## Create Nuxt project 

```
npx nuxi@latest init vue-nuxt-crud
```

## Adding packages

```
npm i bootstrap
npm i sweetalert2
npm i axios
```


## Adding runtime configurations

Access the endpoint https://mock-api.binaryboxtuts.com/ to redeem the apiKey to be used in requests


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/cfb5fa23-f34d-47b7-8e89-28a2f1eb19b1" style="width:100%">
</div>

### Configuring nuxt.config.ts

- apiUrl: a URL to an API (Application Programming Interface) that the program will interact with. In this case, the program is configured to interact with an API located at https://mock-api.binaryboxtuts.com.

- apiKey: Field that will be filled with the API key revealed for authentication.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/b84d51d0-3ebb-4db2-9f4a-8a11cdb54cdd" style="width:100%">
</div>


## Plugins

axiosApitClient configures an Axios instance with a base URL and a request interceptor to add a custom header. It then provides this custom Axios instance to the Nuxt application, allowing the application to make HTTP requests configured with these specific options.

<br>
<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/a88852c9-5f23-4f55-a8ed-e72c9c5a65be" style="width:100%">
</div>

- import axios from 'axios';: This imports the Axios library, which is a JavaScript library used to make HTTP requests from the browser or Node.js.

- export default defineNuxtPlugin((nuxtApp) => { ... });: This exports a Nuxt plugin. The defineNuxtPlugin method is used to define a Nuxt plugin. This plugin takes an argument nuxtApp, which is the Nuxt application instance.

- const runctimeConfig = useRuntimeConfig(): This calls a useRuntimeConfig() function to get the application's runtime configuration. Presumably this is used to obtain configuration information specific to the environment in which the application is running.

- const axiosApiClient = axios.create(): This creates an Axios instance, which is a custom instance that can have specific settings.

- axiosApiClient.defaults.baseURL = runctimeConfig.public.apiUrl: Sets the base URL for all requests made through this Axios instance. The base URL is set using the apiUrl runtime configuration.

- axiosApiClient.interceptors.request.use(function (config) { ... });: This adds a request interceptor to Axios. Interceptors are functions that are executed before a request is sent. In this case, the function adds a custom X-Binarybox-Api-Key header to the request, using the API key obtained from the apiKey runtime configuration.

- return { provide: { axiosApiClient: axiosApiClient, }, };: This returns an object that will be provided by Nuxt to the application. This object provides the custom Axios instance to the application, allowing the application to easily access the Axios instance configured with the required settings.

<br>

## Services

- getProjects: This function is responsible for making a GET request to obtain all API projects. It uses Axios' $axiosApiClient.get() method to make the request.

- getProject: This function receives an id parameter and makes a GET request to obtain a specific project from the API. It uses Axios' $axiosApiClient.get() method, passing the ID in the request URL.

- createProject: This function receives a project object as a parameter and makes a POST request to create a new project in the API. It uses the Axios $axiosApiClient.post() method, passing the project object as the request body.

- updateProject: This function receives two parameters, the id of the project that should be updated and a project object with the new project data. It makes a PATCH request to update the project in the API. It uses Axios' $axiosApiClient.patch() method, passing the ID in the request URL and the project object as the request body.

- deleteProject: This function receives an id parameter and makes a DELETE request to delete a project from the API. It uses Axios' $axiosApiClient.delete() method, passing the ID in the request URL.



<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/33da6096-5593-4372-bbcf-83047d8f8dc4" style="width:100%">
</div>
<br>

## Read

Read: It involves the operation of retrieving or reading existing data from the system.

```
pages/index.vue
```

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/b997c881-d4e5-4428-8281-cb2b1d03fb16" style="width:100%">
</div>

## Create

Create: Refers to the operation of creating new data in the system.

```
pages/create.vue
```

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/083c4fc3-6af1-46db-a1a4-b2b314a996c8" style="width:100%">
</div>


## Update

Update: Refers to the operation of modifying or updating existing data in the system.

```
pages/edit/[id].vue
```

<div align="center">
 <h3>Get Project</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/fb407644-c5aa-412f-a418-3d1f54d5cafb" style="width:100%">
</div>

<br>

<div align="center">
 <h3>Update Project</h3>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/d51c957a-4935-4f8b-99fa-e19505b39b12" style="width:100%">
</div>


## Delete

Delete: Involves the operation of removing existing data from the system.

```
pages/index.vue
```

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Nuxt-Crud/assets/157809964/af5380e1-1c86-414c-8c9f-66471f50ff46" style="width:100%">
</div>


























