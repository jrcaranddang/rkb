import { Output } from '@angular/core/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  clicked: Boolean = false;
  fullImage = '';
  tiles = [
    {num: 'One', cols: 3, rows: 5, color: '#FFF5EE', img: "url('../../assets/img/IMG_0352.JPG')"},
    {num: 'Two', cols: 3, rows: 3, color: '#FFF5E1', img: "url('../../assets/img/IMG_0364.JPG')"},
    {num: 'Three', cols: 3, rows: 5, color: '#E8DCCD', img: "url('../../assets/img/IMG_0384.JPG')"},
    {num: 'Four', cols: 3, rows: 5, color: '#E8D4CD', img: "url('../../assets/img/whiteCabinetEdit.jpg')"},
    {num: 'Five', cols: 3, rows: 6, color: '#FFE5E1', img: "url('../../assets/img/IMG_0390.JPG')"},
    {num: 'Six', cols: 3, rows: 6, color: '#FFF5EE', img: "url('../../assets/img/IMG_0427.JPG')"},
    {num: 'Seven', cols: 3, rows: 6, color: '#FFF5E1', img: "url('../../assets/img/20160923_170322.jpg')"},
    {num: 'Eight', cols: 3, rows: 6, color: '#E8DCCD', img: "url('../../assets/img/20160824_152620.jpg')"},
    {num: 'Nine', cols: 3, rows: 6, color: '#E8D4CD', img: "url('../../assets/img/20170317_141722.jpg')"},
    {num: 'Ten', cols: 3, rows: 3, color: '#FFE5E1', img: "url('../../assets/img/counterTopCloseUpEdit.jpg')"},
    {num: 'Eleven', cols: 3, rows: 6, color: '#FFF5EE', img: "url('../../assets/img/fullKitchenRemoveBottleLabels.jpg')"},
    {num: 'Tweleve', cols: 3, rows: 5, color: '#FFF5E1', img: "url('../../assets/img/IMG_0420.JPG')"},
    {num: 'Thirteen', cols: 3, rows: 5, color: '#E8DCCD', img: "url('../../assets/img/IMG_0412.JPG')"},
    {num: 'Fourteen', cols: 3, rows: 5, color: '#E8D4CD', img: "url('../../assets/img/rightSideKitchenRemoveBottleLabels.jpg')"},
  ];

  images = [
    {num: 'One', src: '../../assets/img/IMG_0352.JPG' },
    {num: 'Two', src: '../../assets/img/IMG_0364.JPG' },
    {num: 'Three', src: '../../assets/img/IMG_0384.JPG' },
    {num: 'Four', src: '../../assets/img/whiteCabinetEdit.jpg' },
    {num: 'Five', src: '../../assets/img/IMG_0390.JPG' },
    {num: 'Six', src: '../../assets/img/IMG_0427.JPG' },
    {num: 'Seven', src: '../../assets/img/20160923_170322.jpg' },
    {num: 'Eight', src: '../../assets/img/20160824_152620.jpg' },
    {num: 'Nine', src: '../../assets/img/20170317_141722.jpg' },
    {num: 'Ten', src: '../../assets/img/counterTopCloseUpEdit.jpg' },
    {num: 'Eleven', src: '../../assets/img/fullKitchenRemoveBottleLabels.jpg' },
    {num: 'Tweleve', src: '../../assets/img/IMG_0420.JPG' },
    {num: 'Thirteen', src: '../../assets/img/IMG_0412.JPG' },
    {num: 'Fourteen', src: '../../assets/img/rightSideKitchenRemoveBottleLabels.jpg' }
  ];
  constructor() { }

  ngOnInit() {
  }

  viewImage(img) {
    // console.log(img.slice(4, img.length-1))
    this.clicked = true;
    // this.fullImage = img.slice(4, img.length-1);

    console.log(img.num);
    this.images.forEach(image => {
        // console.log(image.src);
      if (img.num === image.num) {
        console.log(image.src);
        this.fullImage = image.src;
      }
    });
  }

  closeImage() {
    this.clicked = false;
  }
}