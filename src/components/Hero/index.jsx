import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const Hero = () => {
  // Configurações do carousel
  const settings = {
    dots: true, // Mostra os indicadores de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Mostra um slide por vez
    slidesToScroll: 1, // Rola um slide por vez
    autoplay: true, // Rola automaticamente
    autoplaySpeed: 3000, // Tempo entre os slides (ms)
    arrows: false, // Remove setas laterais
  };

  return (
    <section id="novidades" className="hero">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://placehold.co/1200x500/?text=Slide 1"
            alt="Promoção de Verão"
          />
        </div>
        <div className="slide">
          <img
            src="https://placehold.co/1200x500/?text=Slide 2"
            alt="Novidades Exclusivas"
          />
        </div>
        <div className="slide">
          <img
            src="https://placehold.co/1200x500/?text=Slide 3"
            alt="Descontos Imperdíveis"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
