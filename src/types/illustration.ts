export type Illustration = {
  id: number;
  slug: string;
  title: string;
  imagePath: string;
  aspectRatio: string;
  color: string;
  description?: string;
  additionalImages?: string[];
};
