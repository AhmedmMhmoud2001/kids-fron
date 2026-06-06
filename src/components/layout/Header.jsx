import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import MobileMenu from "./MobileMenu";
import SearchModal from "../search/SearchModal";
import logo from "../../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { fetchCategories } from "../../api/categories";
import { fetchTopHeaderOffers } from "../../api/settings";
import { Search, Heart, User, ShoppingBag, Menu } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout, cartCount, favoritesCount, setIsCartOpen, audience } = useApp();
  const { language, toggleLanguage, t } = useLanguage();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetchCategories(audience);
        if (res.success) {
          setCategories(res.data || []);
        }
      } catch (err) {
        console.error("Error fetching header categories:", err);
      }
    };
    loadCategories();
  }, [audience]);

  useEffect(() => {
    const loadOffers = async () => {
      const data = await fetchTopHeaderOffers();
      const active = (data || []).filter(
        (o) => o?.isActive !== false && (o?.titleEn || o?.titleAr || Number(o?.discountPercent || 0) > 0)
      );
      setOffers(active);
    };
    loadOffers();
  }, []);

  const getOfferBannerText = (offer) => {
    if (!offer) return t("header.banner");
    const currentOfferText = language === "ar"
      ? (offer.titleAr || offer.titleEn || "")
      : (offer.titleEn || offer.titleAr || "");
    const offerDiscount = Number(offer.discountPercent || 0);
    const discountText = offerDiscount > 0
      ? (language === "ar" ? `خصم ${offerDiscount}%` : `${offerDiscount}% OFF`)
      : "";
    return discountText
      ? (currentOfferText ? `${currentOfferText} • ${discountText}` : discountText)
      : currentOfferText || t("header.banner");
  };

  const buildOfferLink = (offer) => {
    if (!offer) return null;
    const base = offer.url || "/shop";
    const params = new URLSearchParams();
    if (offer.categorySlug) params.set("categorySlug", String(offer.categorySlug).trim());
    if (offer.brandSlug) params.set("brandSlug", String(offer.brandSlug).trim());
    const ids = Array.isArray(offer.productIds)
      ? offer.productIds
      : String(offer.productIds || "").split(",").map((v) => v.trim()).filter(Boolean);
    if (ids.length) params.set("productIds", ids.join(","));
    if (audience) params.set("audience", audience);
    const q = params.toString();
    if (!q) return base;
    return `${base}${base.includes("?") ? "&" : "?"}${q}`;
  };

  const userMenuRef = useRef(null);

  // Handle click outside for user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getBrandLogoClass = (isActive) =>
    `flex h-8 sm:h-9 items-center outline-none ring-0 transition-opacity duration-200 ${
      isActive ? "opacity-100" : "opacity-30 hover:opacity-45"
    }`;

  const getBrandNextClass = (isActive) =>
    `relative flex h-8 sm:h-9 items-center pb-px text-lg sm:text-[1.35rem] font-semibold leading-none tracking-[0.2em] outline-none ring-0 transition-all duration-200 ${
      isActive
        ? "text-gray-900 opacity-100 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gray-900"
        : "text-gray-500 opacity-40 hover:opacity-55"
    }`;

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto relative flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-2.5">
          <div className="w-full max-w-3xl min-w-0 px-10">
            {offers.length > 0 ? (
              <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
              <Swiper
                key={language}
                modules={[Autoplay]}
                slidesPerView={1}
                loop={offers.length > 1}
                autoplay={offers.length > 1 ? { delay: 3500, disableOnInteraction: false } : false}
                className="w-full"
              >
                {offers.map((offer) => {
                  const link = buildOfferLink(offer);
                  const text = getOfferBannerText(offer);
                  return (
                    <SwiperSlide key={offer.id || text}>
                      {link ? (
                        <Link to={link} className="block text-center truncate hover:underline underline-offset-2">
                          {text}
                        </Link>
                      ) : (
                        <p className="text-center truncate">{text}</p>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              </div>
            ) : (
              <p className="text-center truncate">{t("header.banner")}</p>
            )}
          </div>
          <button
            onClick={toggleLanguage}
            className="absolute right-4 sm:right-6 md:right-10 lg:right-16 text-xs font-medium min-w-[30px] h-7 px-1.5 flex items-center justify-center rounded-sm bg-white/25 hover:bg-white/35 transition-colors"
            aria-label={language === "en" ? t("common.switchToArabic") : t("common.switchToEnglish")}
          >
            {language === "en" ? t("common.switchToArabic") : t("common.switchToEnglish")}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between py-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(true)}
              className="lg:hidden p-2 -ml-2 transition-colors hover:bg-gray-50 rounded-md"
              aria-label={t("header.openMenu")}
            >
              <Menu className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
            </button>

            {/* Brand tabs */}
            <div className="flex items-center gap-3 sm:gap-4">
              <NavLink to="/" end className={({ isActive }) => getBrandLogoClass(isActive)}>
                <img
                  src={logo}
                  alt="Kids & Co."
                  className="h-6 sm:h-7 w-auto object-contain mix-blend-screen outline-none"
                />
              </NavLink>

              <span className="h-6 sm:h-7 w-px bg-gray-300" aria-hidden="true" />

              <NavLink to="/home2" className={({ isActive }) => getBrandNextClass(isActive)}>
                NEXT
              </NavLink>
            </div>

            {/* Right Icons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setShowSearchModal(true)}
                className="p-2 transition-opacity hover:opacity-60"
                aria-label={t("header.search")}
              >
                <Search className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
              </button>

              <Link
                to="/favorites"
                className="p-2 relative transition-opacity hover:opacity-60"
                aria-label={t("header.favorites")}
              >
                <Heart className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                {favoritesCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-gray-900 text-white text-[10px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="p-2 transition-opacity hover:opacity-60"
                  aria-label={t("header.userMenu")}
                >
                  <User className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute z-[999] right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 ">
                    {user ? (
                      <>
                        <div className="px-4 py-2 border-b">
                          <p className="text-sm font-semibold text-gray-900">
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                        <Link
                          to="/account"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            {t("header.myAccount")}
                          </div>
                        </Link>
                        <Link
                          to="/favorites"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            {t("header.myFavorites")}
                          </div>
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                            navigate("/");
                          }}
                          className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            {t("header.logout")}
                          </div>
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/signin"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                              />
                            </svg>
                            {t("header.signIn")}
                          </div>
                        </Link>
                        <Link
                          to="/signup"
                          onClick={() => setShowUserMenu(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                              />
                            </svg>
                            {t("header.signUp")}
                          </div>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 relative transition-opacity hover:opacity-60"
                aria-label={t("header.shoppingCart")}
              >
                <ShoppingBag className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-gray-900 text-white text-[10px] rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-0.5">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        categories={categories}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      />
    </>
  );
};

export default Header;
