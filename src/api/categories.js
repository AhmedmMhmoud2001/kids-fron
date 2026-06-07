import { API_BASE_URL } from './config';
import { resolveMediaUrl } from '../utils/mediaUrl';

const normalizeCategory = (category) => {
    if (!category) return category;

    const rawImage = category.image || category.imageUrl;
    if (!rawImage) return category;

    const image = resolveMediaUrl(rawImage);
    return {
        ...category,
        image,
        ...(category.imageUrl ? { imageUrl: image } : {}),
    };
};

const normalizeCategoriesResponse = (data) => {
    if (!data) return data;

    if (Array.isArray(data)) {
        return data.map(normalizeCategory);
    }

    if (Array.isArray(data.data)) {
        return {
            ...data,
            data: data.data.map(normalizeCategory),
        };
    }

    return data;
};

// Get all categories with optional audience filter
export const fetchCategories = async (audience = null) => {
    try {
        const url = audience 
            ? `${API_BASE_URL}/categories?audience=${audience}`
            : `${API_BASE_URL}/categories`;
            
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch categories');
        }
        
        return normalizeCategoriesResponse(data);
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Get single category by ID
export const fetchCategoryById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/categories/${id}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch category');
        }
        
        return normalizeCategory(data);
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

