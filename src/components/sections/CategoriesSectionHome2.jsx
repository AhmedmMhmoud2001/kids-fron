import { Link } from 'react-router-dom';
import Section from '../common/Section';
import { useApp } from '../../context/AppContext';
import { useLanguage } from '../../context/LanguageContext';

const CategoriesSectionHome2 = ({
  categories = [],
  limit = 6,
  className = '',
}) => {
  const { audience } = useApp();
  const { t } = useLanguage();

  const categoriesToShow = categories.slice(0, limit);

  const isRTL =
    typeof document !== 'undefined' &&
    ((document.documentElement.getAttribute('dir') || 'ltr')?.toLowerCase() === 'rtl');

  if (!categoriesToShow.length) return null;

  return (
    <Section padding="py-4 lg:py-6" className={className}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="grid grid-cols-3 gap-3 md:gap-5 lg:gap-6">
          {categoriesToShow.map((category, idx) => {
            const key = category.id || category.slug || idx;

            return (
              <Link
                key={key}
                to={`/category/${category.slug}?audience=${audience}`}
                className="group flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-full aspect-square flex items-end justify-center mb-2 overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 w-full aspect-square rounded-full bg-[#f3f4f6] group-hover:bg-[#e5e7eb] transition-colors duration-300 z-0" />

                  {category.image ? (
                    <img
                      src={category.image}
                      alt={t(category.name)}
                      className="absolute left-1/2 bottom-0 -translate-x-1/2 w-auto h-[92%] max-h-full object-contain object-bottom z-10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.15)]"
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <h3 className="font-bold text-gray-800 text-xs sm:text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {t(category.name)}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default CategoriesSectionHome2;
