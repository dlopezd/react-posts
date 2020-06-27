# react-posts

Es una aplicación desarrollada en React + Redux + Material-ui que consume los servicios de la api [jsonplaceholder](https://jsonplaceholder.typicode.com/) para obtener una lista de posts.
En términos generales, la aplicación permite:
  - Ver una lista de post
  - Ver el detalle de un post en particular
  - Crear un nuevo post

## Características!
  - La primera vez que se le solicita la lista de posts al API y se almacenan en un estado de redux. De esta manera se evita la sobrecarga del API con requests innecesarios, y el renderizado será más rápido cuando se consulte nuevamente la página.
  - Un principio similar se utiliza para carga el detalle del post. Si la información ya se gestiona en la lista, entonces no se solicita al API y se renderiza. Por el contrario, si se ingresa directamente al detalle de un post sin pasar por la lista de post, entonces se pide la información al API.

## Limitaciones:
  - Por la limitaciones de la API, se cargan los 100 posts y se muestran agrupados usando un paginador. Si la cantidad de elementos es alta se podría cargar los items de forma segmentada para evitar una sobre exigencia en el cliente.  
