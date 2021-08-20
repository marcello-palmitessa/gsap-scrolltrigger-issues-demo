import { Label, ModularPageBase } from '@/types/index';

/**
 * Get the relative url of a given page, as the sum of the slugs of its parents
 * Note: support only 2 levels of hierarchy
 * @param allModularPages
 * @param pageId
 */
export const getPageFullSlug = (allModularPages: Array<ModularPageBase>, pageId: string): string => {
  if (!allModularPages) {
    console.warn('allModularPages is undefined!!');
    return '';
  }

  let path = '';
  const page = allModularPages.find(p => p.id === pageId);

  if (!page) {
    return '';
  }

  // add the parent page slug
  if (page.parent) {
    path += `/${page.parent.slug}`;
  }

  // add the given page slug
  path += `/${page.slug}`;

  return path;
};

/**
 * Extract a label from the labels array.
 * If no key is found, return an empty string
 * @param labels
 * @param key
 */
export const getLabelByKey = (labels: Array<Label>, key: string): string => {
  const label = labels.find(l => l.key === key);

  return label ? label.label : '';
};

/**
 * Get the Key of a string enum given its value
 * See: https://newbedev.com/how-to-get-enum-key-by-value-in-typescript
 * @param myEnum
 * @param enumValue
 */
export function getEnumKeyByEnumValue(myEnum: any, enumValue: string): string {
  let keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : '';
}
