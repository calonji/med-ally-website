export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  stats: string;
  color: ColorVariant;
  delay: number;
}

export interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  features: string[];
}

export type ColorVariant = 'blue' | 'purple' | 'emerald' | 'rose' | 'indigo' | 'cyan' | 'amber';

export interface Plan {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  button: string;
  color: ColorVariant;
  popular?: boolean;
  comingSoon?: boolean;
}

export interface ROIFormData {
  patientsPerDay: number;
  minutesPerNote: number;
  daysPerWeek: number;
  hourlyRate: number;
}

export interface ROIMetrics {
  hoursSaved: number;
  moneySaved: number;
  patientsPerYear: number;
  additionalPatientsCapacity: number;
}

export interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
} 