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
    additionalInfo:
      'CSS (Cascading Style Sheets) se utiliza principalmente para controlar el diseño, formato y presentación visual de los documentos HTML.',
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
    additionalInfo:
      '**HTML** significa **Hyper Text Markup Language**. Es el lenguaje estándar para crear páginas web.',
  },
  {
    id: 5,
    question: '¿Cuál es la forma correcta de comentar en CSS?',
    options: [
      { id: 1, content: '// Este es un comentario en CSS' },
      { id: 2, content: '<!-- Este es un comentario en CSS -->' },
      { id: 3, content: '/* Este es un comentario en CSS */' },
      { id: 4, content: '# Este es un comentario en CSS' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'En CSS, los comentarios, ya sean en bloque o en línea, se escriben entre `/*` y `*/`. Esto permite escribir notas o desactivar temporalmente ciertas reglas de estilo.',
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
    additionalInfo:
      'La propiedad `color` en CSS se utiliza para especificar el color del texto dentro de un elemento.',
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
    additionalInfo:
      'El elemento `<head>` contiene **meta-información** sobre el documento HTML, como título, enlaces a hojas de estilo, scripts y otros metadatos.',
  },
  {
    id: 8,
    question:
      '¿Qué selector CSS se utiliza para seleccionar todos los elementos de una página?',
    options: [
      { id: 1, content: '#all' },
      { id: 2, content: '.all' },
      { id: 3, content: '*' },
      { id: 4, content: 'all' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'El **selector universal** `*` en CSS selecciona todos los elementos en un documento HTML. Hay que **usarlo con precaución**, ya que puede afectar el rendimiento y la estructura del documento.',
  },
  {
    id: 9,
    question: '¿Cuál es la diferencia principal entre margin y padding en CSS?',
    options: [
      { id: 1, content: 'No hay diferencia, son sinónimos' },
      {
        id: 2,
        content:
          'Margin es el espacio desde el borde del elemento hacia fuera, padding es el espacio desde el borde del elemento hacia dentro',
      },
      { id: 3, content: 'Margin es para texto, padding es para imágenes' },
      {
        id: 4,
        content:
          'Padding es el espacio desde el borde del elemento hacia fuera, margin es el espacio desde el borde del elemento hacia dentro',
      },
    ],
    correctAnswer: 2,
    additionalInfo:
      'Margin crea espacio alrededor del elemento, fuera de sus bordes. Padding crea espacio dentro del elemento, entre sus bordes y su contenido.',
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
    additionalInfo:
      'La etiqueta `<ul>` (**unordered list**) se usa para crear listas no ordenadas en HTML. Los elementos de la lista se definen con `<li>`.',
  },
  {
    id: 11,
    question:
      '¿Cuál es la forma correcta de vincular un archivo CSS externo en HTML?',
    options: [
      { id: 1, content: '<style src="styles.css">' },
      { id: 2, content: '<link rel="stylesheet" href="styles.css">' },
      { id: 3, content: '<css>styles.css</css>' },
      { id: 4, content: '<script type="text/css" src="styles.css">' },
    ],
    correctAnswer: 2,
    additionalInfo:
      'Se usa la etiqueta `<link>` con los atributos **rel="stylesheet"** y **href** apuntando al archivo CSS para vincular hojas de estilo externas.',
  },
  {
    id: 12,
    question:
      '¿Qué propiedad CSS se utiliza para hacer que un elemento sea flexible?',
    options: [
      { id: 1, content: 'flexible' },
      { id: 2, content: 'display: flex' },
      { id: 3, content: 'position: flex' },
      { id: 4, content: 'flex: true' },
    ],
    correctAnswer: 2,
    additionalInfo:
      'La propiedad `display: flex` se usa para crear un contenedor flexible, permitiendo un diseño más fácil y responsive de los elementos hijos.',
  },
  {
    id: 13,
    question:
      '¿Cuál es el propósito del atributo "viewport" en la etiqueta <meta>?',
    options: [
      { id: 1, content: 'Definir el idioma de la página' },
      { id: 2, content: 'Establecer el título de la página' },
      {
        id: 3,
        content: 'Controlar la visualización y escala en dispositivos móviles',
      },
      { id: 4, content: 'Especificar la codificación de caracteres' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'El atributo **viewport** en la etiqueta `<meta>` se usa para controlar cómo se muestra una página en dispositivos móviles, afectando el zoom y el ancho de la página.',
  },
  {
    id: 14,
    question: '¿Para qué se utiliza el elemento <canvas> de HTML?',
    options: [
      {
        id: 1,
        content: 'Para dibujar gráficos y animaciones mediante scripts',
      },
      { id: 2, content: 'Para crear formularios interactivos' },
      { id: 3, content: 'Para insertar videos en la página web' },
      { id: 4, content: 'Para definir áreas de navegación' },
    ],
    correctAnswer: 1,
    additionalInfo:
      'El elemento `<canvas>` es un contenedor para **gráficos dibujados por medio de JavaScript**. Permite crear gráficos, animaciones, juegos y otras composiciones visuales directamente en el navegador.',
  },
  {
    id: 15,
    question:
      '¿Cómo funcionan las variables CSS (custom properties) y cuál es su sintaxis?',
    options: [
      { id: 1, content: 'Se definen con $variable y se usan con @variable' },
      { id: 2, content: 'Se definen con @variable y se usan con $variable' },
      {
        id: 3,
        content: 'Se definen con --variable y se usan con var(--variable)',
      },
      {
        id: 4,
        content: 'Se definen con var(variable) y se usan con --variable',
      },
    ],
    correctAnswer: 3,
    additionalInfo:
      'Las variables CSS, también conocidas como custom properties, se definen usando dos guiones (--) y se acceden usando la función var(). Por ejemplo: `--main-color: #06c;` `color: var(--main-color);',
  },
  {
    id: 16,
    question: '¿Qué son los selectores de atributo en CSS y cómo se utilizan?',
    options: [
      {
        id: 1,
        content: 'Seleccionan elementos basados en su posición en el DOM',
      },
      { id: 2, content: 'Seleccionan elementos basados en sus clases o IDs' },
      {
        id: 3,
        content:
          'Seleccionan elementos basados en sus atributos o valores de atributos',
      },
      { id: 4, content: 'Seleccionan elementos basados en sus pseudo-clases' },
    ],
    correctAnswer: 3,
    additionalInfo:
      'Los selectores de atributo en CSS **permiten seleccionar elementos basados en sus atributos o valores de atributos**. Por ejemplo, `[type="text"]` selecciona todos los elementos con `type="text"`.',
  },
  {
    id: 17,
    question:
      '¿Cuál es la diferencia entre visibility: hidden y display: none en CSS?',
    options: [
      { id: 1, content: 'No hay diferencia, ambos ocultan el elemento' },
      {
        id: 2,
        content:
          'visibility: hidden oculta el elemento pero mantiene su espacio, display: none lo elimina del flujo del documento',
      },
      {
        id: 3,
        content:
          'display: none oculta el elemento pero mantiene su espacio, visibility: hidden lo elimina del flujo del documento',
      },
      {
        id: 4,
        content:
          'visibility: hidden solo funciona en elementos en línea, display: none en elementos de bloque',
      },
    ],
    correctAnswer: 2,
    additionalInfo:
      '`visibility: hidden` oculta el elemento pero mantiene su espacio en el layout. `display: none` oculta el elemento y lo elimina completamente del flujo del documento, como si no existiera.',
  },
  {
    id: 18,
    question:
      '¿Cómo se utiliza la función calc() en CSS y en qué situaciones es útil?',
    options: [
      { id: 1, content: 'Para calcular valores de color en formato RGB' },
      {
        id: 2,
        content: 'Para realizar cálculos matemáticos con diferentes unidades',
      },
      { id: 3, content: 'Para calcular la especificidad de los selectores' },
      { id: 4, content: 'Para calcular el tiempo de las animaciones CSS' },
    ],
    correctAnswer: 2,
    additionalInfo:
      'La función `calc()` permite realizar **cálculos matemáticos** como parte de un valor CSS. Es útil para combinar unidades diferentes, por ejemplo: `width: calc(100% - 80px);`',
  },
  {
    id: 19,
    question: '¿Qué son las media queries en CSS?',
    options: [
      { id: 1, content: 'Consultas para obtener información del servidor' },
      {
        id: 2,
        content:
          'Reglas CSS que se aplican basadas en características del dispositivo o navegador',
      },
      { id: 3, content: 'Métodos para consultar bases de datos desde CSS' },
      { id: 4, content: 'Funciones para animar elementos en CSS' },
    ],
    correctAnswer: 2,
    additionalInfo:
      'Las media queries permiten aplicar estilos CSS basados en características del dispositivo como el ancho de la pantalla. Ejemplo: `@media (width <= 600px) { ... }`',
  },
  {
    id: 20,
    question: '¿Para que sirve la función color-mix() en CSS?',
    options: [
      { id: 1, content: 'Para combinar colores' },
      { id: 2, content: 'Para establecer colores de fondo' },
      { id: 3, content: 'Para establecer colores de texto' },
      { id: 4, content: 'Para establecer colores de borde' },
    ],
    correctAnswer: 1,
    additionalInfo:
      'La función `color-mix()` permite combinar colores. Por ejemplo: `color: color-mix(in srgb, red, blue 20%);`, obteniendo como resultado un nuevo color.',
  },
  {
    id: 21,
    question: '¿Cuál es la forma correcta de representar decimales en CSS?',
    options: [
      { id: 1, content: '0,5' },
      { id: 2, content: '0.5' },
      { id: 3, content: '.5' },
      { id: 4, content: 'La 2 y la 3 son correctas' },
    ],
    correctAnswer: 4,
    additionalInfo:
      'En CSS los números decimales se representan con un punto. Cuando se trata de valores decimales entre 0 y 1, es técnicamente correcto usar ambas formas: 0.5 o .5.',
  },
  {
    id: 22,
    question:
      '¿Cuál es la forma correcta de cambiar la opacidad de un elemento?',
    options: [
      { id: 1, content: 'opacity: 0.5' },
      { id: 2, content: 'opacity: 50%' },
      { id: 3, content: 'opacity: 50' },
      { id: 4, content: 'La 1 y la 2 son correctas' },
    ],
    correctAnswer: 4,
    additionalInfo:
      'En CSS la opacidad de un elemento se modifica con la propiedad `opacity` con un valor entre 0 y 1 o 0% y 100%. Por ejemplo `opacity: 0.5;` es equivalente a `opacity: 50%;`',
  },
  {
    id: 23,
    question: '¿Cual es la forma correcta de agrupar selectores en CSS?',
    options: [
      { id: 1, content: 'selector1, selector2, selector3' },
      { id: 2, content: ':is(selector1, selector2, selector3)' },
      { id: 3, content: ':where(selector1, selector2, selector3)' },
      { id: 4, content: 'Todas son correctas' },
    ],
    correctAnswer: 4,
    additionalInfo:
      'En CSS se pueden agrupar selectores de varias formas. Se pueden separar con una `,` o con selectores más modernos como `:is()` o `:where()`.',
  },
  {
    id: 24,
    question: '¿Qué etiqueta de HTML se usa para crear una acordeón?',
    options: [
      { id: 1, content: '<details>' },
      { id: 2, content: '<summary>' },
      { id: 3, content: '<dialog>' },
      { id: 4, content: '<accordion>' },
    ],
    correctAnswer: 1,
    additionalInfo:
      'En HTMl se usa la etiqueta `<details>` para la creación de un acordeón. Con la etiqueta `<summary>` se define el título del acordeón y al hacer clic en el se abre o se cierra, mostrando u ocultando el contenido.',
  },
  {
    id: 25,
    question: '¿Cuál es la forma correcta de crear un enlace a un archivo PDF?',
    options: [
      { id: 1, content: '<a href="document.pdf">' },
      { id: 2, content: '<a href="document.pdf" download>' },
      { id: 3, content: '<a href="document.pdf" target="_blank">' },
      { id: 4, content: 'Todas son correctas' },
    ],
    correctAnswer: 4,
    additionalInfo:
      'En HTML se puede crear un enlace a un archivo PDF con la etiqueta `<a>` y el atributo `href` apuntando al archivo PDF. También se puede descargar el archivo con el atributo `download`. Con el atributo `target="_blank"` se abre el archivo en una nueva ventana.',
  },
];
