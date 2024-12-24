export interface Property {
  id: number;
  title: string;
  slug: string;
  price: number;
  units: string;
  property_type: string;
  property_status: string;
  beds: number;
  baths: number;
  images: string[];
  description: string;
  created_at: string;
  updated_at: string;
}
