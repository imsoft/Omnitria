declare module 'aos' {
    export function init(options?: AosOptions): void;
  
    export interface AosOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    export default {
      init,
    };
  }