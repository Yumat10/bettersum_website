export interface CaseStudyMedia {
  title: string;
  url: string;
  contentType: string;
}

export interface CaseStudyTemplateOne {
  handle?: string;
  title?: string;
  subtitle?: string;
  siteUrl?: string;
  tags?: string[];
  splashImage?: CaseStudyMedia;
  description?: {
    json: {
      content: {
        content: {
          value: string;
        }[];
      }[];
    };
  };
  stats?: string[];
  statLabels?: string[];
  mediaContent?: {
    items: CaseStudyMedia[];
  };
}

export interface CaseStudyPreview {
  handle: string;
  title: string;
  splashImage: CaseStudyMedia;
  tags: string[];
}
