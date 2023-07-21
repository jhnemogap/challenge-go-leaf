# Challenge GoLeaf

v0.1.0-beta.1

## Nomenclatura

* __GoLeaf__: es una referencia a una posible empresa o emprendimiento
* __client__: se refiere a un cliente de GoLeaf o a su plataforma Web
* __user__: hace alusión al usuario final es decir un usuario de un cliente 
  de GoLeaf.
* __api__: hace referencia al servidor y específicamente a la API de GoLeaf
* __web__: es una abreviación para indicar la Web de GoLeaf desde donde se 
  puede subir los datos / archivos del usuario final (__user__).

## Estructura

### clientsOfGoLead

En esta carpeta se agrupan los proyectos que simularán las diferentes 
plataformas de los clientes.

En esta primera fase se cuenta con una página `index.html` que permite cambiar 
entre diferentes perfiles de cliente/usuario y así simular varios casos desde 
un mismo punto.

### goLeaf

Este es el proyecto que cuenta con el desarrollo del la página web de GoLeaf 
desde donde se presenta el formulario de subida de datos del usuario final.

Es un proyecto construido usando [Fresh](https://fresh.deno.dev/) el cual 
ofrece tanto la parte Frontend como Backend por medio de su routing de API CRUD.

### goleaf-widget

El último es el proyecto con el cual empezamos la migración del fronted externo 
de la plataforma web del cliente por un widget como un web component y por lo 
tanto simplificando su implementación por parte de este y mejorando la 
experiencia del usuario final al no tener que dejar la web en la que estaba.

## Getting started

### Consideraciones previas

Se debe tener instalado [Node.js (+18.14.0)](https://nodejs.org/en) y 
[Deno (+1.35.0)](https://deno.land/manual@v1.35.2/getting_started/installation).

### Ejecución manual

La página que simula la web del cliente es HTML, CSS y JS en un sólo archivo
`./clientsOfGoLeaf/index.html`. 

Aun que se puede ejecutar con solo abrirlo en un navegador y funciona, pero 
si se desea probar el código externo referente el widget entonces este debe ser 
servido desde algun tipo de servidor como el que ofrecen algunos IDE como 
VsCode (GoLive) o WebStorm.

La otra forma es desde la raíz del proyecto ejecutar el siguiente comando:

```bash
npx serve -p 5012 ./clientsOfGoLeaf
```

Ahora en paralelo en otra terminal para levantar el proyecto propio de GoLeaf 
se debe entrar a la carpeta `goLeaf`

```bash
cd ./goLeaf
```
seguidamente ejecutamos el siguiente comando:

```bash
deno task start
```

En este momento ya sólo es simular la petición de un usuario final desde la web 
`clientsOfGoLeaf/index.html` la cual abrirá la página de GoLeaf con un 
formulario donde se hace la prueba de subida de datos.

### Ejecutando todo de forma simple

Finalmente, si se quiere ejecutar todo menos manual es abrir el proyecto 
`Challenge GoLeaf` en dos terminales al mismo tiempo, y ejecutar en la primera:

```bash
sh run-all.sh
```
y luego en la segunda terminal ejecutar:

```bash
sh run-vanilla-client.sh
```
