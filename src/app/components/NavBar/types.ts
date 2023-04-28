export interface NavPage {
  url?: string;
  name: string;
  alt: string;
  subpage?: NavSubPage[]
}

export type NavSubPage = NavPage;