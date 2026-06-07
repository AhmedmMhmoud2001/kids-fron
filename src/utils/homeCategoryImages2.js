import { resolveMediaUrl } from './mediaUrl';
import boyImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_10_48 PM.png';
import girlImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_10_54 PM.png';
import babyBoyImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_11_04 PM.png';
import babyGirlImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_13_13 PM.png';
import accessoriesImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_13_08 PM.png';
import footwearImage from '../assets/categoryhome2/ChatGPT Image Jun 6, 2026, 05_14_36 PM.png';

const HOME2_CATEGORY_IMAGES = {
  boy: boyImage,
  girl: girlImage,
  'baby-boy': babyBoyImage,
  'babyboy': babyBoyImage,
  'baby-girl': babyGirlImage,
  'babygirl': babyGirlImage,
  accessories: accessoriesImage,
  footwear: footwearImage,
};

const normalizeCategorySlug = (slug = '') =>
  String(slug).trim().toLowerCase().replace(/_/g, '-');

export const getHome2CategoryImage = (slug, name = '') => {
  const normalized = normalizeCategorySlug(slug);
  if (HOME2_CATEGORY_IMAGES[normalized]) {
    return HOME2_CATEGORY_IMAGES[normalized];
  }

  const label = String(name).trim().toLowerCase();
  if (label.includes('baby boy')) return babyBoyImage;
  if (label.includes('baby girl')) return babyGirlImage;
  if (label === 'boy' || label.endsWith(' boy')) return boyImage;
  if (label === 'girl' || label.endsWith(' girl')) return girlImage;
  if (label.includes('access')) return accessoriesImage;
  if (label.includes('foot') || label.includes('shoe')) return footwearImage;

  return null;
};

const getCategoryImageFromApi = (category) =>
  String(category?.image || category?.imageUrl || '').trim();

export const applyHome2CategoryImages = (categories = []) =>
  categories.map((category) => {
    const apiImage = getCategoryImageFromApi(category);
    if (apiImage) {
      return {
        ...category,
        image: resolveMediaUrl(apiImage),
      };
    }

    const localImage = getHome2CategoryImage(category.slug, category.name);
    if (!localImage) return category;

    return {
      ...category,
      image: localImage,
    };
  });
