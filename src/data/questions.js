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
    additionalInfo:
      'Para crear un enlace se usa la etiqueta <a> con el atributo href.',
  },
];
