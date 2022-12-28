import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraCaptureComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
