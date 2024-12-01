import React, { useState, useEffect } from 'react';
import './Header.css';
import Noticias from '../../Pages/Noticias/Noticias';

// Dados de notícias
const noticias = [
  { 
    id: 1, 
    titulo: 'Chuvas intensas causam alagamentos em diversas cidades brasileiras.',
    imagem: 'https://th.bing.com/th/id/OIP.Pq63Es10zw58jlSi_0tllwHaE7?rs=1&pid=ImgDetMain' 
  },
  { 
    id: 2, 
    titulo: 'Frente fria histórica traz nevascas e temperaturas negativas recordes.',
    imagem: 'https://www.jornaldocomercio.com/_midias/jpg/2022/01/30/000_9xh6xm-9531096.jpg' 
  },
  { 
    id: 3, 
    titulo: 'Novo recorde de temperatura é registrado no Rio',
    imagem: 'https://s2-g1.glbimg.com/L03J5BulVzrUPbBBvGBa6HsFzms=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/i/a/o51YBWQECmNK4JZtFxhQ/3bcce060-21af-11ee-a887-9f9e2f96fb01.jpg' 
  }
];

function Header() {
  const [noticiasAtuais, setNoticiasAtuais] = useState([]);

  useEffect(() => {
    // Pega as 3 primeiras notícias
    setNoticiasAtuais(noticias.slice(0, 3));
  }, []);

  return (
    <header className="menu" aria-label="Cabeçalho de navegação do site OPEN Clima">
      <div className="logo">
        <span>Mundo Meteorológico</span>
      </div>
      <nav>
        <a href="/" aria-label="Página inicial">Home</a>
        <a href="/Noticias" aria-label="Noticias">Noticias</a>
        <a href="/mapa" aria-label="Mapeamento">Mapa</a>
        <a href="/contatos" aria-label="Página de contatos">Contato</a>
      </nav>

      {/* Barra lateral com carrossel de notícias */}
      <div className="sidebar">
        <div className="sidebar-title">Principais Notícias</div>
        <div className="carousel">
          {noticiasAtuais.map((noticia, index) => (
            <div key={noticia.id} className="carousel-item">
              <img src={noticia.imagem} alt={noticia.titulo} />
              <p>{noticia.titulo}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Barra lateral de Anúncio */}
      <div className="sidebar-right">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
          <img src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2022/09/1-50-e1663946986954.jpg" alt="Anúncio 1" className="ad-image" />
        </div>
      </div>

      {/* Barra lateral de Anúncio2 */}
      <div className="sidebar-right2">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
          <img src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2022/09/1-50-e1663946986954.jpg" alt="Anúncio 2" className="ad-image" />
        </div>
      </div>

      {/* Barra lateral de Anúncio3 */}
      <div className="sidebar-right3">
        <div className="sidebar-title">Anúncio</div>
        <div className="ad-content">
          <img src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2022/09/1-50-e1663946986954.jpg" alt="Anúncio 3" className="ad-image" />
        </div>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          aria-label="Barra de pesquisa" 
        />
        <button aria-label="Botão de pesquisa">🔍</button>
      </div>
    </header>
  );
}

export default Header;
