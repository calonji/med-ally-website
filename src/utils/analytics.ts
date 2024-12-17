import ReactGA from 'react-ga4';

interface EventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

interface PageViewParams {
  path: string;
  title?: string;
}

export interface UserProperties {
  role?: string;
  plan?: string;
  organization?: string;
  timestamp?: string;
  [key: string]: string | number | boolean | undefined;
}

export class Analytics {
  static isInitialized = false;

  static init(measurementId: string) {
    if (!this.isInitialized && measurementId) {
      ReactGA.initialize(measurementId, {
        gaOptions: {
          cookieFlags: 'SameSite=Strict;Secure',
          cookieDomain: window.location.hostname,
          cookieUpdate: true
        }
      });
      this.isInitialized = true;
    }
  }

  static trackPageView({ path, title }: PageViewParams) {
    if (this.isInitialized) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: path,
        title,
        cookieFlags: 'SameSite=Strict;Secure'
      });
    }
  }

  static trackEvent({ category, action, label, value, nonInteraction = false }: EventParams) {
    if (this.isInitialized) {
      ReactGA.event({
        category,
        action,
        label,
        value,
        nonInteraction
      });
    }
  }

  static trackTiming({ category, variable, value, label }: {
    category: string;
    variable: string;
    value: number;
    label?: string;
  }) {
    if (this.isInitialized) {
      ReactGA.send({
        hitType: "timing",
        timingCategory: category,
        timingVar: variable,
        timingValue: value,
        timingLabel: label
      });
    }
  }

  static trackException({ description, fatal = false }: {
    description: string;
    fatal?: boolean;
  }) {
    if (this.isInitialized) {
      ReactGA.event({
        category: 'Error',
        action: 'Exception',
        label: description,
        nonInteraction: !fatal
      });
    }
  }

  static setUserProperties(properties: UserProperties) {
    if (this.isInitialized) {
      ReactGA.set({
        ...properties,
        timestamp: new Date().toISOString()
      });
    }
  }
} 