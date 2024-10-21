import { Injectable } from '@angular/core';
import RFB from 'novnc-core'; // Import as default

@Injectable({
  providedIn: 'root',
})
export class VncService {
  private rfb: any = null;

  connectVNC(url: string, password: string): void {
    this.rfb = new RFB(document.getElementById('vnc-canvas') as HTMLElement, url, {
      credentials: { password: password }, // 只包含密碼
    });

    this.rfb.addEventListener('connect', () => {=
      console.log('VNC connected');
    });

    this.rfb.addEventListener('disconnect', () => {
      console.log('VNC disconnected');
    });
  }

  disconnectVNC(): void {
    if (this.rfb) {
      this.rfb.disconnect();
      this.rfb = null;
    }
  }
}
