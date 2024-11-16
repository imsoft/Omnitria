export interface Feature {
  title: string;
  description: string;
}

export interface OurService {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  features: Feature[];
}
