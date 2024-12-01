import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>Fique sempre atualizado com a previsão do tempo da sua região!</p>
      <p style={styles.paragraph}>
        Para mais informações, acesse{' '}
        <a href="https://www.climatempo.com.br" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Climatempo
        </a>
      </p>
      <p style={styles.paragraph}>&copy; 2024 Previsão do Tempo. Todos os direitos reservados.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* <h1>Conteúdo Principal</h1>
        <p>Insira aqui o conteúdo da sua página.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisi at nisl vehicula, at fringilla nunc fringilla.</p>
        <p>Adicione conteúdo suficiente para testar a rolagem.</p> */}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // O container ocupa a altura total da tela
  },
  content: {
    flex: 1, // O conteúdo principal ocupa o espaço acima do rodapé
    padding: '20px',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    textAlign: 'center', // Centraliza os textos
    fontFamily: 'Arial, sans-serif',
    marginTop: 'auto', // Garante que o rodapé fique na parte inferior
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centraliza os elementos no eixo horizontal
  },
  heading: {
    margin: '10px 0',
  },
  paragraph: {
    margin: '5px 0',
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
  },
};

export default App;
