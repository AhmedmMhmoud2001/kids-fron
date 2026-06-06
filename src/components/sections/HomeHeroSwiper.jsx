import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../../context/LanguageContext';
import LogoText from '../layout/LogoText';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeHeroSwiper = ({ slides = [], link = '/shop' }) => {
  const { t } = useLanguage();

  if (!slides.length) return null;

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={slides.length > 1}
        autoplay={slides.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        className="home-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              <img
                src={slide.image}
                alt={slide.alt || 'Kids & Co. collection'}
                className="img-sharp block w-full h-auto"
                loading={slide.id === slides[0]?.id ? 'eager' : 'lazy'}
                decoding="async"
              />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
                  <div className="max-w-md sm:max-w-lg md:max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-2 md:mb-3 drop-shadow-sm">
                      <span className="block">{t('homeHero.shopSmart')}.</span>
                      <span className="block mt-1 md:mt-2">
                        <span className="inline-flex flex-wrap items-baseline gap-x-2">
                          <span>{t('homeHero.shop')}</span>
                          <LogoText inheritSize />
                        </span>
                      </span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 md:mb-6 drop-shadow-sm">
                      {t('homeHero.newCollection')}
                    </p>

                    <Link
                      to={link}
                      className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm tracking-[0.15em] px-6 sm:px-8 py-3 sm:py-3.5 transition-colors"
                    >
                      {t('homeHero.shopNow')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeHeroSwiper;
