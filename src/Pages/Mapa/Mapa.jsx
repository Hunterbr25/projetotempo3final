import './Mapa.css';

function WeatherMap() {
  return (
    <section className="weather-map">
      {/* Apenas a imagem do mapa meteorológico */}
      <img 
        src="https://s2-g1.glbimg.com/6OhPCLk_TgljzcUYsw4c26b1-hA=/0x0:678x501/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/s/pnEGOrTXyeY8OqrmmZCA/mapa-tempo-vale.png" 
        alt="Mapa Meteorológico"
        className="map-image"
      />
    </section>
  );
}

export default WeatherMap;
