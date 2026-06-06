import { Link } from 'react-router-dom';
import Section from '../common/Section';
import { useApp } from '../../context/AppContext';
import { useLanguage } from '../../context/LanguageContext';
import { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CategoriesSection = ({
  categories = [],
  limit = null,
  gridCols = 'grid-cols-2 sm:grid-cols-3',
  className = '',
  pageSize = 6,
  showArrows = true,
  autoPlay = true,
  autoPlayDelayMs = 3500
}) => {
  const { audience } = useApp();
  const { t } = useLanguage();
  const id = useId().replace(/:/g, '');
  const prevClass = `cats-prev-${id}`;
  const nextClass = `cats-next-${id}`;

  const categoriesToShow = limit ? categories.slice(0, limit) : categories;
  const total = categoriesToShow.length;
  const shouldUseSwiper = total > pageSize;

  const pages = shouldUseSwiper
    ? Array.from({ length: Math.ceil(total / pageSize) }, (_, pageIndex) => {
        const start = pageIndex * pageSize;
        const end = Math.min(start + pageSize, total);
        return categoriesToShow.slice(start, end);
      })
    : [categoriesToShow];

  const isRTL =
    typeof document !== 'undefined' &&
    ((document.documentElement.getAttribute('dir') || 'ltr')?.toLowerCase() === 'rtl');

  return (
    <Section padding="py-8 lg:py-12" className={className}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className="relative">
        {showArrows && shouldUseSwiper ? (
          <>
            <button
              type="button"
              className={`swiper-nav-btn ${prevClass} absolute -left-2 lg:-left-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-8 w-8 items-center justify-center text-gray-900 hover:opacity-60`}
              aria-label="Previous categories"
            >
              ‹
            </button>
            <button
              type="button"
              className={`swiper-nav-btn ${nextClass} absolute -right-2 lg:-right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-8 w-8 items-center justify-center text-gray-900 hover:opacity-60`}
              aria-label="Next categories"
            >
              ›
            </button>
          </>
        ) : null}
        <Swiper
          key={isRTL ? 'rtl' : 'ltr'}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          allowTouchMove={shouldUseSwiper}
          autoplay={
            autoPlay && shouldUseSwiper
              ? { delay: autoPlayDelayMs, disableOnInteraction: true, pauseOnMouseEnter: true }
              : false
          }
          navigation={
            showArrows && shouldUseSwiper
              ? { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }
              : false
          }
        >
          {pages.map((page, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className={`grid ${gridCols} gap-4 md:gap-6 lg:gap-8`}>
                {page.map((category, idx) => {
                  const key = category.id || category.slug || `${pageIndex}-${idx}`;

                  return (
                    <Link
                      key={key}
                      to={`/category/${category.slug}?audience=${audience}`}
                      className="group block text-center"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg bg-[#f3efe8] mb-3">
                        {category.image ? (
                          <img
                            src={category.image}
                            alt={t(category.name)}
                            className="img-sharp h-full w-full object-cover object-center"
                            loading={pageIndex === 0 && idx < 6 ? 'eager' : 'lazy'}
                            decoding="sync"
                            fetchPriority={pageIndex === 0 && idx < 3 ? 'high' : 'auto'}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                            {t(category.name)}
                          </div>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-900">
                        {t(category.name)}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default CategoriesSection;
