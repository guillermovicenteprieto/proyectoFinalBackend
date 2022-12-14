### Desafio: Entrega Final Backend

## Rutas

| METODO | **ENDPOINT** | DESCRIPCION

| GET | **/info** | Muestra información relativa a la app

| GET | **/productos-test** | Página de testeo, devuelve listado de 5 productos mock generados con **Faker.js**

| GET | **/** | Dirige a la página de inicio de la aplicación

| GET | **/login** | Página de inicio de la aplicación

| POST | **/login** | Comprueba datos de usuario y devuelve una página de ingreso y bienvenida.

| GET | **/registro** | Formulario de registro de usuario.

| POST | **/registro** | Permite registrarse. Las sesesiones son almacenadas en mongoAtlas

| GET | **/logout** | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.

| GET | **/productos** | Lista los productos disponibles. Redirecciona luego de realizar el LOGIN.

| GET | **/api/productos** | Lista todos los productos disponibles

| GET | **/api/productos/:id** | Muestra un producto según su id

| POST | **/api/productos** | Permite incorporar un producto a la base de datos

| PUT | **/api/productos/:id** | Actualizar un producto en la base de datos según su id

| DELETE | **/api/productos/:id** | Eliminar un producto de la base de datos según su id

| GET | **/api/carritos** | Lista los carritos disponibles

| GET | **/api/carritos/:id** | Muestra un carrito según su id

| GET | **/api/carritos/:id/productos** | Muestra los productos de un carrito según su id

| POST | **/api/carritos** | Permite incorporar un carrito a la base de datos

| POST | **/api/carritos/:id/productos/idProducto** | Permite incorporar producto al carrito según su id

| DELETE | **/api/carritos/:id** | Elimina un carrito de la base de datos según su id

| DELETE | **/api/carritos/:id/productos/idProduto** | Elimina un producto del carrito según su id

| GET | **/api/carritos/compra/:id/user/idUser** | Finaliza la compra de un carrito según su id y el id del usuario y envia un correo con los datos de la compra, además de un sms y un mensaje vía WhatsApp.


| POST | **http://localhost:8080/api/auth/signup** | Permite registrarse y autenticarse como administrador

| POST | **http://localhost:8080/api/auth/login** | Permite ingresar el usuario autenticado


| POST | **http://localhost:8080/chats** | Permite ingresar un mensaje al chat que quedará guardado en la base de datos.

| GET | **http://localhost:8080/chats** | Permite obtener los mensajes de chat de la base de datos.



| GET | **http://localhost:8080/api/users** | Permite obtener los usuarios de la base de datos.

| GET | **http://localhost:8080/api/users/:id** | Permite obtener usuario por id.

| GET | **http://localhost:8080/api/users/:id/image** | Permite obtener el avatar del usuario.

| PUT | **http://localhost:8080/api/users/:id** | Permite editar al usuario.

| DEL | **http://localhost:8080/api/users/:id** | Permite eliminar registro de usuario.
