import { Component, OnInit } from '@angular/core';
import { VncService } from './vnc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(private vncService: VncService) {}

  connect(): void {
    const url = 'ws://10.60.8.65:5900'; // VNC server WebSocket URL
    const password = '123456'; // 使用密碼

    this.vncService.connectVNC(url, password); // 只傳入兩個參數
  }

  disconnect(): void {
    this.vncService.disconnectVNC();
  }
}
