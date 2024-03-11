import names from '@/utils/common/locales/localeNames.json';
import images from '@/utils/common/locales/localeImage.json';

interface LocaleNames {
  [locale: string]: string; 
}

export const getLocaleName = (locale: string, localeNames: LocaleNames = names): string => {
  return localeNames[locale] || 'Unknown Locale';
};

export const getLocaleImage = (locale: string, localeImages: LocaleNames = images): string => {
  return localeImages[locale] || '#';
};