import { Component, OnInit } from '@angular/core';
import { 
  NgxQrcodeElementTypes, 
  NgxQrcodeErrorCorrectionLevels 
} from '@techiediaries/ngx-qrcode';

interface Images{
  title: string;
  correctionLevel: NgxQrcodeErrorCorrectionLevels;
  elementType: NgxQrcodeElementTypes;
  value: string
  
}
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})

export class QrCodeComponent implements OnInit {

  public details: Images[];
  constructor() { 
    this.details = [
      {
      title: 'Something',
      elementType: NgxQrcodeElementTypes.URL,
      correctionLevel:NgxQrcodeErrorCorrectionLevels.HIGH,
      value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      },
      {
        title: 'A beautiful mountain house',
        elementType: NgxQrcodeElementTypes.URL,
        correctionLevel:NgxQrcodeErrorCorrectionLevels.HIGH,
        value: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__480.jpg'
      },
      {
        title: 'Beautiful Lake house in a middle of forest',
        elementType: NgxQrcodeElementTypes.URL,
        correctionLevel:NgxQrcodeErrorCorrectionLevels.HIGH,
        value: 'https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg'
      },
      {
        title: 'Something',
        elementType: NgxQrcodeElementTypes.URL,
        correctionLevel:NgxQrcodeErrorCorrectionLevels.HIGH,
        value: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
      }
    ]
  }

  ngOnInit(): void {
  }

}
