import type { RouteKey } from '@/i18n/routes';

export interface NavCategory {
  key: RouteKey;
  label: string;
  href: string;
}

export interface LangLink {
  code: string;
  url: string;
}
