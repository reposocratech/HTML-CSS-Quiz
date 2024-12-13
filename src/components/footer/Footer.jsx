import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Creado por
          <a
            href="https://www.linkedin.com/in/sergio-jim%C3%A9nez-rubio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sergio Jiménez Rubio
          </a>
          en
          <a
            href="https://socratech.es"
            rel="noopener noreferrer"
            target="_blank"
          >
            SocraTech
            <img src="./images/Logo-SocraTech.webp" alt="Logo de SocraTech" />
          </a>
        </p>
      </div>
    </footer>
  );
};
