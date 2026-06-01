# 🧸 Kids & Co. - E-Commerce Platform

<div align="center">

![Kids & Co. Logo](src/assets/logo.png)

**منصة تجارة إلكترونية حديثة ومتجاوبة لملابس الأطفال والرضع الفاخرة**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

</div>

---

## 📋 جدول المحتويات

- [نظرة عامة](#-نظرة-عامة)
- [المميزات الرئيسية](#-المميزات-الرئيسية)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [البدء السريع](#-البدء-السريع)
- [بنية المشروع](#-بنية-المشروع)
- [الصفحات](#-الصفحات)
- [المكونات](#-المكونات)
- [الأوامر المتاحة](#-الأوامر-المتاحة)
- [التصميم المتجاوب](#-التصميم-المتجاوب)
- [التطويرات المستقبلية](#-التطويرات-المستقبلية)

---

## 🎯 نظرة عامة

**Kids & Co.** هو متجر إلكتروني متكامل مصمم خصيصاً لبيع ملابس الأطفال والرضع. يتميز المشروع بتصميم عصري وواجهة مستخدم سهلة الاستخدام، مع دعم كامل للأجهزة المحمولة والتابلت.

تم بناء المشروع باستخدام أحدث التقنيات الحديثة لضمان أداء سريع وتجربة مستخدم سلسة.

---

## ✨ المميزات الرئيسية

### 🛍️ التسوق والمنتجات
- ✅ عرض المنتجات في شبكة متجاوبة (Grid/List View)
- ✅ صفحات تفاصيل المنتج مع معرض صور تفاعلي
- ✅ نظام فلترة متقدم (حسب الفئة، السعر، الحجم، اللون، البراند)
- ✅ ترتيب المنتجات (الأحدث، السعر، الشهرة)
- ✅ نظام بحث شامل عن المنتجات
- ✅ عرض المنتجات الأكثر مبيعاً

### 🛒 سلة التسوق والمفضلة
- ✅ إضافة/حذف المنتجات من السلة
- ✅ تعديل الكميات بسهولة
- ✅ حساب تلقائي للمجموع والشحن
- ✅ قائمة المفضلة (Wishlist)
- ✅ حفظ العناصر للشراء لاحقاً

### 💳 الدفع والطلبات
- ✅ صفحة Checkout متكاملة
- ✅ صفحة الدفع مع نماذج آمنة
- ✅ دعم بطاقات Visa, Mastercard, Amex, Discover
- ✅ حساب تكاليف الشحن

### 👤 الحسابات والصفحات
- ✅ صفحات تسجيل الدخول والتسجيل
- ✅ صفحة حساب المستخدم
- ✅ صفحة "من نحن" (About)
- ✅ صفحة الاتصال (Contact)
- ✅ صفحة الأسئلة الشائعة (FAQs)
- ✅ صفحة معلومات التوصيل (Delivery)

### 🎨 التصميم والواجهة
- ✅ تصميم متجاوب بالكامل (Mobile-First)
- ✅ واجهة عصرية وجذابة
- ✅ قوائم تنقل ذكية (Desktop & Mobile)
- ✅ شريط تنقل سفلي للموبايل (Bottom Navigation)
- ✅ قائمة جانبية للموبايل (Mobile Menu)
- ✅ رسوم متحركة سلسة
- ✅ Breadcrumb للتنقل السهل

### 🚀 الأداء والتقنية
- ✅ بناء سريع مع Vite
- ✅ Context API لإدارة الحالة
- ✅ Swiper للعروض التفاعلية
- ✅ React Router للتنقل السلس
- ✅ Lazy Loading للصور
- ✅ كود منظم وقابل للصيانة

---

## 🛠️ التقنيات المستخدمة

### Frontend Framework
- **React 19.2.0** - مكتبة JavaScript لبناء واجهات المستخدم
- **Vite 7.2.4** - أداة بناء سريعة وخادم تطوير

### Styling & UI
- **Tailwind CSS 3.4.19** - إطار عمل CSS حديث
- **PostCSS & Autoprefixer** - معالجة CSS

### Routing & Navigation
- **React Router DOM 7.11.0** - التوجيه من جانب العميل

### Components & Utilities
- **Swiper 12.0.3** - عروض شرائح تفاعلية
- **Context API** - إدارة الحالة العامة

### Development Tools
- **ESLint** - فحص جودة الكود
- **React Hooks** - للمكونات الوظيفية

---

## 🚀 البدء السريع

### المتطلبات الأساسية

تأكد من تثبيت:
- **Node.js** (الإصدار 16 أو أحدث)
- **npm** أو **yarn** لإدارة الحزم

### خطوات التثبيت

1️⃣ **نسخ المشروع**
```bash
git clone <repository-url>
cd Kids---Co--Backlog
```

2️⃣ **تثبيت المكتبات**
```bash
npm install
# أو
yarn install
```

3️⃣ **تشغيل الخادم المحلي**
```bash
npm run dev
# أو
yarn dev
```

4️⃣ **فتح المتصفح**
افتح المتصفح على العنوان:
```
http://localhost:5173
```

### البناء للإنتاج

```bash
npm run build
# أو
yarn build
```

### معاينة البناء
```bash
npm run preview
# أو
yarn preview
```

---

## 📁 بنية المشروع

```
Kids---Co--Backlog/
│
├── public/                      # الملفات العامة
│   └── vite.svg
│
├── src/
│   ├── assets/                  # الصور والأيقونات
│   │   ├── logo.png
│   │   ├── Hero.png
│   │   └── [صور المنتجات والأيقونات]
│   │
│   ├── components/              # المكونات القابلة لإعادة الاستخدام
│   │   │
│   │   ├── cart/               # مكونات سلة التسوق
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── CartItem.jsx
│   │   │   └── CartSidebar.jsx
│   │   │
│   │   ├── common/             # مكونات مشتركة
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Pagination.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── Section.jsx
│   │   │
│   │   ├── filter/             # مكونات الفلترة
│   │   │   ├── FilterSidebar.jsx
│   │   │   ├── FilterSidebarWrapper.jsx
│   │   │   └── MobileFilterModal.jsx
│   │   │
│   │   ├── layout/             # مكونات التخطيط
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── BottomNav.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   └── Navigation.jsx
│   │   │
│   │   ├── product/            # مكونات المنتجات
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductQuickView.jsx
│   │   │   ├── ProductToolbar.jsx
│   │   │   └── ViewModeSelector.jsx
│   │   │
│   │   ├── search/             # مكونات البحث
│   │   │   └── SearchModal.jsx
│   │   │
│   │   └── sections/           # أقسام الصفحة الرئيسية
│   │       ├── BestSellersSection.jsx
│   │       ├── BrandsSection.jsx
│   │       ├── CategoriesSection.jsx
│   │       ├── CategoriesSectionHome2.jsx
│   │       └── FeaturesSection.jsx
│   │
│   ├── context/                # Context API
│   │   └── AppContext.jsx      # الحالة العامة للتطبيق
│   │
│   ├── data/                   # البيانات الوهمية
│   │   ├── products.js
│   │   ├── products.json
│   │   └── users.js
│   │
│   ├── pages/                  # صفحات التطبيق
│   │   ├── About.jsx           # صفحة من نحن
│   │   ├── Account.jsx         # صفحة الحساب
│   │   ├── Brands.jsx          # صفحة البراندات
│   │   ├── Cart.jsx            # صفحة سلة التسوق
│   │   ├── Category.jsx        # صفحة الفئة
│   │   ├── Checkout.jsx        # صفحة إتمام الطلب
│   │   ├── Contact.jsx         # صفحة الاتصال
│   │   ├── Delivery.jsx        # صفحة معلومات التوصيل
│   │   ├── FAQs.jsx            # صفحة الأسئلة الشائعة
│   │   ├── Favorites.jsx       # صفحة المفضلة
│   │   ├── Home.jsx            # الصفحة الرئيسية
│   │   ├── Home2.jsx           # نسخة بديلة للصفحة الرئيسية
│   │   ├── Payment.jsx         # صفحة الدفع
│   │   ├── ProductDetail.jsx   # صفحة تفاصيل المنتج
│   │   ├── Shop.jsx            # صفحة المتجر
│   │   ├── SignIn.jsx          # صفحة تسجيل الدخول
│   │   └── SignUp.jsx          # صفحة التسجيل
│   │
│   ├── utils/                  # وظائف مساعدة
│   │   └── productFilters.js   # فلاتر المنتجات
│   │
│   ├── App.jsx                 # المكون الرئيسي
│   ├── main.jsx               # نقطة الدخول
│   └── index.css              # التنسيقات العامة
│
├── .gitignore
├── eslint.config.js           # إعدادات ESLint
├── index.html
├── package.json               # المكتبات والإعدادات
├── postcss.config.js          # إعدادات PostCSS
├── tailwind.config.js         # إعدادات Tailwind
├── vite.config.js             # إعدادات Vite
└── README.md                  # هذا الملف
```

---

## 📄 الصفحات

| الصفحة | المسار | الوصف |
|--------|--------|--------|
| **الرئيسية** | `/` | الصفحة الرئيسية مع Hero، الفئات، والمنتجات المميزة |
| **المتجر** | `/shop` | جميع المنتجات مع الفلترة والترتيب |
| **الفئة** | `/category/:category` | منتجات فئة معينة |
| **تفاصيل المنتج** | `/product/:id` | معلومات تفصيلية عن المنتج |
| **السلة** | `/cart` | سلة التسوق |
| **المفضلة** | `/favorites` | قائمة المنتجات المفضلة |
| **Checkout** | `/checkout` | إتمام الطلب |
| **الدفع** | `/payment` | صفحة الدفع |
| **الحساب** | `/account` | صفحة حساب المستخدم |
| **تسجيل الدخول** | `/signin` | تسجيل الدخول |
| **التسجيل** | `/signup` | إنشاء حساب جديد |
| **من نحن** | `/about` | معلومات عن الشركة |
| **الاتصال** | `/contact` | نموذج الاتصال |
| **الأسئلة الشائعة** | `/faqs` | الأسئلة الشائعة |
| **التوصيل** | `/delivery` | معلومات التوصيل |
| **البراندات** | `/brands` | صفحة البراندات |

---

## 🧩 المكونات

### Layout Components (التخطيط)
- **Header** - الهيدر مع الشعار والقوائم
- **Footer** - الفوتر مع الروابط
- **Navigation** - قائمة التنقل الرئيسية
- **MobileMenu** - القائمة الجانبية للموبايل
- **BottomNav** - شريط التنقل السفلي للموبايل

### Product Components (المنتجات)
- **ProductCard** - بطاقة المنتج
- **ProductGrid** - شبكة عرض المنتجات
- **ProductQuickView** - عرض سريع للمنتج
- **ProductToolbar** - أدوات الفرز والعرض
- **ViewModeSelector** - التبديل بين Grid/List

### Cart Components (السلة)
- **CartDrawer** - درج السلة المنبثق
- **CartItem** - عنصر في السلة
- **CartSidebar** - الشريط الجانبي للسلة

### Common Components (مشتركة)
- **Breadcrumb** - مسار التنقل
- **Container** - حاوية بتباعد موحد
- **EmptyState** - حالة فارغة
- **Loading** - مؤشر التحميل
- **Pagination** - ترقيم الصفحات
- **Section** - قسم بتنسيق موحد

---

## 🎨 التصميم المتجاوب

المشروع مصمم ليكون متجاوب بالكامل على جميع الأجهزة:

### نقاط الانقطاع (Breakpoints)
```css
/* Tailwind Breakpoints */
sm:  640px   /* Tablet Portrait */
md:  768px   /* Tablet Landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large Desktop */
2xl: 1536px  /* Extra Large */
```

### مميزات التصميم المتجاوب
- ✅ Mobile-First Approach
- ✅ Flexible Grid System
- ✅ Responsive Images
- ✅ Touch-Friendly Buttons
- ✅ Mobile Navigation Menu
- ✅ Bottom Navigation Bar
- ✅ Optimized Font Sizes
- ✅ Proper Spacing for All Screens

---

## ⚡ الأوامر المتاحة

| الأمر | الوصف |
|-------|--------|
| `npm run dev` | تشغيل خادم التطوير المحلي |
| `npm run build` | بناء المشروع للإنتاج |
| `npm run preview` | معاينة البناء النهائي |
| `npm run lint` | فحص الكود بـ ESLint |

---

## 🎯 إدارة الحالة (State Management)

يستخدم المشروع **Context API** لإدارة الحالة العامة:

### AppContext Features
- 🛒 إدارة سلة التسوق
- ❤️ إدارة المفضلة
- 🔍 حالة البحث
- 🎛️ إعدادات العرض (Grid/List)
- 📱 حالة القوائم (Mobile Menu, Search Modal, Cart Drawer)

---

## 🔮 التطويرات المستقبلية

### Phase 1 - Essential Features
- [ ] دمج Backend API
- [ ] المصادقة الكاملة (Authentication)
- [ ] قاعدة بيانات حقيقية
- [ ] معالجة الدفع (Payment Gateway)
- [ ] إدارة الطلبات

### Phase 2 - Enhanced Features
- [ ] نظام التقييمات والمراجعات
- [ ] نظام الكوبونات والخصومات
- [ ] تتبع الطلبات
- [ ] إشعارات البريد الإلكتروني
- [ ] الاشتراك في النشرة البريدية

### Phase 3 - Advanced Features
- [ ] نظام التوصيات الذكية
- [ ] دعم متعدد اللغات (i18n)
- [ ] دعم متعدد العملات
- [ ] PWA (Progressive Web App)
- [ ] وضع الظلام (Dark Mode)
- [ ] تكامل مع وسائل التواصل الاجتماعي
- [ ] لوحة تحكم المدير (Admin Dashboard)

---

## 📊 الأداء والتحسينات

### Performance Optimizations
- ⚡ Code Splitting مع React.lazy
- 🖼️ Lazy Loading للصور
- 📦 Tree Shaking مع Vite
- 🗜️ تصغير الملفات (Minification)
- 💾 Caching Strategies
- 🚀 Fast Refresh في التطوير

---

## 🤝 المساهمة

هذا مشروع خاص. للمساهمة:
1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

---

## 📝 الترخيص

هذا المشروع خاص وملكية خاصة. جميع الحقوق محفوظة © 2024 Kids & Co.

---

## 📞 التواصل

للاستفسارات أو الدعم:
- 📧 Email: info@kidsandco.com
- 🌐 Website: www.kidsandco.com
- 📱 Phone: +XXX XXX XXXX

---

## 🙏 شكر وتقدير

شكراً لاستخدام **Kids & Co.**! نأمل أن يكون المشروع مفيداً وسهل الاستخدام.

<div align="center">

**صُنع بـ ❤️ من فريق Kids & Co.**

⭐ إذا أعجبك المشروع، لا تنسى إعطاءه نجمة!

</div>
#   k i d s w i t h b a c k  
 #   k i d s - f r o n  
 