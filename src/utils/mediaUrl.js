import { API_HOST } from '../api/config';

const LEGACY_MEDIA_HOST = 'kids.nodeteam.site';

/**
 * Rewrites media URLs from the legacy host to the current backend origin.
 * Handles absolute legacy URLs and relative /uploads/ paths.
 */
export const resolveMediaUrl = (url) => {
  if (!url) return url;

  const trimmed = String(url).trim();
  if (!trimmed) return trimmed;

  if (trimmed.startsWith('data:') || trimmed.startsWith('blob:')) {
    return trimmed;
  }

  if (trimmed.startsWith('/assets/')) {
    return trimmed;
  }

  if (trimmed.startsWith('/uploads/')) {
    return `${API_HOST}${trimmed}`;
  }

  try {
    const parsed = new URL(trimmed, API_HOST);

    if (parsed.hostname === LEGACY_MEDIA_HOST) {
      const backend = new URL(API_HOST);
      parsed.protocol = backend.protocol;
      parsed.hostname = backend.hostname;
      parsed.port = backend.port;
      return parsed.toString();
    }

    return trimmed;
  } catch {
    return trimmed;
  }
};
