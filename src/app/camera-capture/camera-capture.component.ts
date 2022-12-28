import { Component, OnInit } from '@angular/core';
import { BaseConfig } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.scss']
})
export class CameraCaptureComponent implements OnInit {

  public config: BaseConfig = {
    // isAuto: false,
    isDraw: false,
    // isBeep: true,
    // isAlwaysEmit: true,
    text: { 
      font: '25px serif', // Hiden { font: '0px', bottom: 40 },
      fillStyle: 'red' 
    },
    frame: {
      strokeStyle: 'red'
    },
    medias: {
      audio: false,
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        facingMode: 'user', // Front and back camera { facingMode: front ? "user" : "environment" }
      }
    } // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onEvent(e: any): void {
    console.log(e);
  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, console.log);
  }


}
