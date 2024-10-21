declare module 'novnc-core' {
    export default class RFB {
      constructor(target: HTMLElement, url: string, options?: any);
      disconnect(): void;
      sendCredentials(credentials: any): void;
      addEventListener(type: string, listener: (event: any) => void): void;
    }
  }
  