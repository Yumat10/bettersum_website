import { string } from "yup/lib/locale";

export interface CaseStudyPhoto {
  title: string;
  url: string;
}

export interface CaseStudyTemplateOne {
  handle: string;
  title: string;
  shortDescription: string;
  tags: string[];
  url: string;
  isLabs: boolean;
  clientName: string | null;
  photosCollection: {
    items: CaseStudyPhoto[];
  };
  video: {
    title: string;
    url: string;
  };
  overview: {
    json: {
      content: {
        content: {
          value: string;
        }[];
      }[];
    };
  };
  tools: string[];
  stats: string[];
  statDescriptions: string[];
  quote: string;
  quoteUserName: string;
  quoteUserTitle: string;
  quoteLinkText: string;
  quoteLink: string;
}

export interface CaseStudyPreview {
  handle: string;
  title: string;
  previewImage: CaseStudyPhoto[];
  tags: string[];
  templateNumber: string;
}
