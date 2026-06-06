import { useState, useEffect, useId } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { fetchCategories } from '../../api/categories';
import { useLanguage } from '../../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Navigation = () => {
  const location = useLocation();
  const { audience: contextAudience, setAudience } = useApp();
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageSize = 6;
  const id = useId().replace(/:/g, '');
  const prevClass = `navcats-prev-${id}`;
  const nextClass = `navcats-next-${id}`;

  // Read audience from URL query params or use context
  const searchParams = new URLSearchParams(location.search);
  const urlAudience = searchParams.get('audience');
  const audience = urlAudience || contextAudience;

  useEffect(() => {
    const loadCategories = async () => {
      // Determine the effective audience
      const effectiveAudience = urlAudience || contextAudience;

      // Don't load if no audience is available
      if (!effectiveAudience) {

        return;
      }


      setLoading(true);
      try {
        const res = await fetchCategories(effectiveAudience);
        if (res.success) {
          // Map backend categories to include color and path for the UI logic
          const mappedCategories = res.data.map((cat, index) => ({
            ...cat,
            color: String(cat.slug || '').toLowerCase().includes('girl') ? 'pink' :
              String(cat.slug || '').toLowerCase().includes('boy') ? 'blue' :
                index % 2 === 0 ? 'blue' : 'pink',
            path: `/category/${cat.slug}`
          }));
          setCategories(mappedCategories);
        }
      } catch (error) {
        console.error('Error loading navigation categories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [urlAudience, contextAudience]); // Depend on both URL and context audience

  const getLinkClasses = () =>
    `text-[13px] font-semibold tracking-[0.08em] text-gray-900 whitespace-nowrap transition-opacity hover:opacity-60 ${
      language === 'en' ? 'uppercase' : ''
    }`;

  if (loading && categories.length === 0) {
    return (
      <nav className="bg-white border-b border-gray-100 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-2">
          <div className="flex justify-center gap-10 xl:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-4 w-24 bg-gray-100 animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  const total = categories.length;
  const shouldUseSwiper = total > pageSize;
  const pages = shouldUseSwiper
    ? Array.from({ length: Math.ceil(total / pageSize) }, (_, pageIndex) => {
        const start = pageIndex * pageSize;
        const end = Math.min(start + pageSize, total);
        return categories.slice(start, end);
      })
    : [categories];

  const isRTL =
    typeof document !== 'undefined' &&
    ((document.documentElement.getAttribute('dir') || 'ltr')?.toLowerCase() === 'rtl');

  return (
    <nav className="bg-white border-b border-gray-100 hidden lg:block">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div dir={isRTL ? 'rtl' : 'ltr'} className="py-2 relative">
          {shouldUseSwiper ? (
            <>
              <button
                type="button"
                className={`swiper-nav-btn ${prevClass} absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-7 w-7 items-center justify-center text-gray-900 hover:opacity-60`}
                aria-label="Previous categories"
              >
                ‹
              </button>
              <button
                type="button"
                className={`swiper-nav-btn ${nextClass} absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-7 w-7 items-center justify-center text-gray-900 hover:opacity-60`}
                aria-label="Next categories"
              >
                ›
              </button>
            </>
          ) : null}
          <Swiper
            key={isRTL ? 'rtl' : 'ltr'}
            modules={[SwiperNavigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            allowTouchMove={shouldUseSwiper}
            autoplay={
              shouldUseSwiper
                ? { delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }
                : false
            }
            navigation={
              shouldUseSwiper
                ? { prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }
                : false
            }
          >
            {pages.map((page, pageIndex) => (
              <SwiperSlide key={pageIndex}>
                <ul className="flex items-center justify-center gap-10 xl:gap-12">
                  {page.map((category) => {
                    const effectiveAudience = urlAudience || contextAudience;
                    const targetPath = `${category.path}?audience=${effectiveAudience}`;

                    return (
                      <li key={category.id || category.path}>
                        <NavLink
                          to={targetPath}
                          className={getLinkClasses}
                        >
                          {t(category.name)}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
