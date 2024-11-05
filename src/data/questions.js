export const questions = [
  {
    id: 1,
    question: '¿Cuál es el propósito del atributo alt en una etiqueta img?',
    options: [
      { id: 1, content: 'Establecer el tamaño' },
      { id: 2, content: 'Definir texto alternativo' },
      { id: 3, content: 'Cambiar el formato' },
      { id: 4, content: 'Establecer la alineación' },
    ],
    correctAnswer: 2,
    additionalInfo: `
El atributo **alt** se usa en las imágenes para proporcionar un **texto alternativo**, mejorando la **accesibilidad** y el **SEO**.

- Mejora la accesibilidad para usuarios con lectores de pantalla.
- Proporciona contexto cuando la imagen no se puede cargar.
- Ayuda a los motores de búsqueda a entender el contenido de la imagen.
    `,
  },
  {
    id: 2,
    question: '¿Qué etiqueta HTML se usa para crear un enlace?',
    options: [
      { id: 1, content: '<a>' },
      { id: 2, content: '<link>' },
      { id: 3, content: '<href>' },
      { id: 4, content: '<src>' },
    ],
    correctAnswer: 1,
    additionalInfo: 'En HTML se usa la etiqueta `<a>` para crear un enlace.',
  },
  {
    id: 3,
    question: '¿Cuál es la función principal de CSS?',
    options: [
      { id: 1, content: 'Definir la estructura del documento' },
      { id: 2, content: 'Estilizar y dar formato a los elementos HTML' },
      { id: 3, content: 'Manejar la lógica del lado del cliente' },
      { id: 4, content: 'Procesar datos del servidor' },
    ],
    correctAnswer: 2,
    additionalInfo: 'CSS (Cascading Style Sheets) se utiliza principalmente para controlar el diseño, formato y presentación visual de los documentos HTML.',
  },
  {
    id: 4,
    question: '¿Qué significa HTML?',
    options: [
      { id: 1, content: 'Hyper Text Markup Language' },
      { id: 2, content: 'High Tech Modern Language' },
      { id: 3, content: 'Hyper Transfer Markup Language' },
      { id: 4, content: 'Home Tool Markup Language' },
    ],
    correctAnswer: 1,
    additionalInfo: 'HTML significa Hyper Text Markup Language. Es el lenguaje estándar para crear páginas web.',
  },
  {
    id: 5,
    question: '¿Cuál es la forma correcta de comentar en CSS?',
    options: [
      { id: 1, content: '// Este es un comentario' },
      { id: 2, content: '<!-- Este es un comentario -->' },
      { id: 3, content: '/* Este es un comentario */' },
      { id: 4, content: '# Este es un comentario' },
    ],
    correctAnswer: 3,
    additionalInfo: 'En CSS, los comentarios se escriben entre /* y */. Esto permite escribir notas o desactivar temporalmente ciertas reglas de estilo.',
  },
  {
    id: 6,
    question: '¿Qué propiedad CSS se usa para cambiar el color del texto?',
    options: [
      { id: 1, content: 'text-color' },
      { id: 2, content: 'font-color' },
      { id: 3, content: 'color' },
      { id: 4, content: 'text-style' },
    ],
    correctAnswer: 3,
    additionalInfo: 'La propiedad `color` en CSS se utiliza para especificar el color del texto dentro de un elemento.',
  },
  {
    id: 7,
    question: '¿Cuál es el propósito del elemento <head> en HTML?',
    options: [
      { id: 1, content: 'Contener el contenido principal de la página' },
      { id: 2, content: 'Definir un encabezado visible' },
      { id: 3, content: 'Contener metadatos y enlaces a recursos externos' },
      { id: 4, content: 'Crear una sección de navegación' },
    ],
    correctAnswer: 3,
    additionalInfo: 'El elemento <head> contiene metainformación sobre el documento HTML, como título, enlaces a hojas de estilo, scripts y otros metadatos.',
  },
  {
    id: 8,
    question: '¿Qué selector CSS se utiliza para seleccionar todos los elementos de una página?',
    options: [
      { id: 1, content: '#all' },
      { id: 2, content: '.all' },
      { id: 3, content: '*' },
      { id: 4, content: 'all' },
    ],
    correctAnswer: 3,
    additionalInfo: 'El selector universal `*` en CSS selecciona todos los elementos en un documento HTML.',
  },
  {
    id: 9,
    question: '¿Cuál es la diferencia principal entre margin y padding en CSS?',
    options: [
      { id: 1, content: 'No hay diferencia, son sinónimos' },
      { id: 2, content: 'Margin es espacio fuera del elemento, padding es espacio dentro' },
      { id: 3, content: 'Margin es para texto, padding es para imágenes' },
      { id: 4, content: 'Padding es espacio fuera del elemento, margin es espacio dentro' },
    ],
    correctAnswer: 2,
    additionalInfo: 'Margin crea espacio alrededor del elemento, fuera de sus bordes. Padding crea espacio dentro del elemento, entre sus bordes y su contenido.',
  },
  {
    id: 10,
    question: '¿Qué etiqueta HTML se usa para crear una lista no ordenada?',
    options: [
      { id: 1, content: '<ol>' },
      { id: 2, content: '<list>' },
      { id: 3, content: '<ul>' },
      { id: 4, content: '<unordered>' },
    ],
    correctAnswer: 3,
    additionalInfo: 'La etiqueta <ul> (unordered list) se usa para crear listas no ordenadas en HTML. Los elementos de la lista se definen con <li>.',
  },
  {
    id: 11,
    question: '¿Cuál es la forma correcta de vincular un archivo CSS externo en HTML?',
    options: [
      { id: 1, content: '<style src="styles.css">' },
      { id: 2, content: '<link rel="stylesheet" href="styles.css">' },
      { id: 3, content: '<css>styles.css</css>' },
      { id: 4, content: '<script type="text/css" src="styles.css">' },
    ],
    correctAnswer: 2,
    additionalInfo: 'Se usa la etiqueta <link> con los atributos rel="stylesheet" y href apuntando al archivo CSS para vincular hojas de estilo externas.',
  },
  {
    id: 12,
    question: '¿Qué propiedad CSS se utiliza para hacer que un elemento sea flexible?',
    options: [
      { id: 1, content: 'flexible' },
      { id: 2, content: 'display: flex' },
      { id: 3, content: 'position: flex' },
      { id: 4, content: 'flex: true' },
    ],
    correctAnswer: 2,
    additionalInfo: 'La propiedad `display: flex` se usa para crear un contenedor flexible, permitiendo un diseño más fácil y responsive de los elementos hijos.',
  },
  {
    id: 13,
    question: '¿Cuál es el propósito del atributo "viewport" en la etiqueta <meta>?',
    options: [
      { id: 1, content: 'Definir el idioma de la página' },
      { id: 2, content: 'Establecer el título de la página' },
      { id: 3, content: 'Controlar la visualización y escala en dispositivos móviles' },
      { id: 4, content: 'Especificar la codificación de caracteres' },
    ],
    correctAnswer: 3,
    additionalInfo: 'El atributo viewport en la etiqueta <meta> se usa para controlar cómo se muestra una página en dispositivos móviles, afectando el zoom y el ancho de la página.',
  },
];
