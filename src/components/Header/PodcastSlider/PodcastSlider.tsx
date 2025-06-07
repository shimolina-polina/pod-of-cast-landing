import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  h3 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    color: #81ADC8;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 36.65px;
    z-index: 2;
    letter-spacing: -0.08;
    line-height: 1.2em;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const cards = [
  { title: 'Tesla Autopilot', image: '/img/1.png' },
  { title: 'Self–confidence', image: '/img/2.png' },
  { title: 'Perplexed Mind', image: '/img/3.png' },
  { title: 'Women’s Rights', image: '/img/4.png' },
  { title: 'Social Class', image: '/img/5.png' },
];

export default function PodcastSlider() {
  return (
    <Wrapper>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        style={{ padding: '20px', marginTop: '100px', maxWidth: '1945px' }}
      >
        {cards.map((card, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: '373px',
              flexShrink: 0,
            }}
          >
            <Card>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}
