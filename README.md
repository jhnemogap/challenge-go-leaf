# Challenge GoLeaf

La descripción del [reto original](#reto---widget-apertura-de-cuenta-versión-pública) 
se puede ver al final. 

v0.1.0-beta.1
[DEMO-video](https://drive.google.com/file/d/1UYE-oKYxydyZ-Ygj245xRjAG0Hxaeta9/view?usp=drive_link)

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

## Reto - Widget apertura de cuenta (versión pública)
https://trebol.notion.site/Widget-apertura-de-cuenta-versi-n-p-blica-b5b1f534d13540f8a71be48abd3a4939

### Instrucciones

El presente caso presenta un requerimiento que Trébol está desarrollando. 
El objetivo es refinar y proponer una forma de cómo desarrollar este 
requerimiento. Durante una llamada, hablaremos sobre este caso y el candidato 
deberá presentar sus ideas y cómo abordaría el desarrollo de este Widget. 
**NO** se debe desarrollar ningún código ni diseñar ningún Figma o frames del requerimiento.

### Objetivo

Diseñar una arquitectura y estructura del proyecto que permita cumplir con 
los requerimientos. Esto se hará en conjunto durante la llamada.

### Caso

#### Definiciones

- Cliente - cliente de Trébol: banco o institución financiera que ofrece servicios a empresas.
- Negocio - empresa solicitante: empresa que quiere obtener un servicio 
  financiero con el Cliente de Trébol. (Cliente de nuestro cliente)

![flujo simple](https://trebol.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4ad9c152-6e7a-4fb0-9dcc-d8c6e8bd1060%2FUntitled.png?table=block&id=8ea2650a-4972-41ef-829c-5b13269031b8&spaceId=23e49760-4f9d-473a-880e-719c3d2697ef&width=2000&userId=&cache=v2)

### Requerimiento

Trébol busca desarrollar un widget que un Cliente pueda integrar fácilmente 
dentro de su proceso de Apertura de Cuenta Bancaria Empresarial. El widget debe 
facilitar la integración con Trébol para que podamos recibir los documentos de 
las Empresas Solicitantes directo en nuestro API.

El Widget se encargará de solicitar documentos que la Empresa debe enviar al 
Banco para poder abrir una nueva cuenta bancaria. Una vez estén adjuntados 
todos los documentos, el usuario que está adjuntando la información deberá 
firmar digitalmente que toda la información es correcta y verídica.

![Página de un Banco donde integra el botón de Trébol para abrir una cuenta empresarial (botón que dice “Verifica tu compañía”](https://trebol.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe90666f8-a0a5-44b3-9dfd-0f73b0a1352e%2FUntitled.png?table=block&id=bc571428-e454-4031-a57a-fd96a79b3483&spaceId=23e49760-4f9d-473a-880e-719c3d2697ef&width=1960&userId=&cache=v2)

Página de un Banco donde integra el botón de Trébol para abrir una cuenta 
empresarial (botón que dice “Verifica tu compañía”

### Requerimientos

1. La integración debe ser lo más fácil posible para el cliente de trébol
2. Un Cliente de Trébol debe poder generar un template con los documentos que 
   quiere solicitarle a una empresa solicitante. Si no genera un template, se 
   puede usar el predefinido por Trébol.
3. La empresa solicitante debe poder cargar los documentos del template solicitados.
4. En caso de error o que se adjunte el documento incorrecto, la empresa 
   solicitante debe poder reintentar cargar la carga. (manejo de lógica de re-intentos)
5. Una vez se reciben todos los documentos, un representante de la empresa debe 
   firmar y aceptar toda la información recopilada. Para esto, usaremos el 
   servicio de un tercero tipo Metamap.
6. Al finalizar, se debe retornar a la empresa solicitante al flujo de 
   onboarding del cliente de Trébol.

### Aspectos a tener en cuenta para la llamada

1. Traer preguntas para aclarar el requerimiento. 
   ¿Qué te gustaría preguntar y a quién dentro de Trébol o dentro del Banco?
2. ¿Qué tecnologías usarías? ¿por qué?
3. ¿Cómo organizarías el desarrollo de esta funcionalidad? ¿Por dónde empezar?
4. ¿Dónde harías deploy del widget?
