import { resolveMediaUrl } from './mediaUrl';
import boyImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_58_20 PM.png';
import girlImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_58_12 PM.png';
import babyBoyImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_57_52 PM.png';
import babyGirlImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_57_46 PM.png';
import accessoriesImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_58_06 PM.png';
import footwearImage from '../assets/categoryhome/ChatGPT Image Jun 6, 2026, 04_58_00 PM.png';

const HOME_CATEGORY_IMAGES = {
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

export const getHomeCategoryImage = (slug, name = '') => {
  const normalized = normalizeCategorySlug(slug);
  if (HOME_CATEGORY_IMAGES[normalized]) {
    return HOME_CATEGORY_IMAGES[normalized];
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

export const applyHomeCategoryImages = (categories = []) =>
  categories.map((category) => {
    const apiImage = getCategoryImageFromApi(category);
    if (apiImage) {
      return {
        ...category,
        image: resolveMediaUrl(apiImage),
      };
    }

    const localImage = getHomeCategoryImage(category.slug, category.name);
    if (!localImage) return category;

    return {
      ...category,
      image: localImage,
    };
  });
