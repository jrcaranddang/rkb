import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 5, color: '#FFF5EE', img: "url('../../assets/img/IMG_0352.JPG')"},
    {text: 'Two', cols: 3, rows: 3, color: '#FFF5E1', img: "url('../../assets/img/IMG_0364.JPG')"},
    {text: 'Three', cols: 3, rows: 5, color: '#E8DCCD', img: "url('../../assets/img/IMG_0384.JPG')"},
    {text: 'Four', cols: 3, rows: 5, color: '#E8D4CD', img: "url('../../assets/img/whiteCabinetEdit.jpg')"},
    {text: 'Five', cols: 3, rows: 6, color: '#FFE5E1', img: "url('../../assets/img/IMG_0390.JPG')"},
    {text: 'Six', cols: 3, rows: 6, color: '#FFF5EE', img: "url('../../assets/img/IMG_0427.JPG')"},
    {text: 'Seven', cols: 3, rows: 6, color: '#FFF5E1', img: "url('../../assets/img/20160923_170322.jpg')"},
    {text: 'Eight', cols: 3, rows: 6, color: '#E8DCCD', img: "url('../../assets/img/20160824_152620.jpg')"},
    {text: 'Nine', cols: 3, rows: 6, color: '#E8D4CD', img: "url('../../assets/img/20170317_141722.jpg')"},
    {text: 'Ten', cols: 3, rows: 3, color: '#FFE5E1', img: "url('../../assets/img/counterTopCloseUpEdit.jpg')"},
    {text: 'Eleven', cols: 3, rows: 6, color: '#FFF5EE', img: "url('../../assets/img/fullKitchenRemoveBottleLabels.jpg')"},
    {text: 'Tweleve', cols: 3, rows: 5, color: '#FFF5E1', img: "url('../../assets/img/IMG_0420.JPG')"},
    {text: 'Five', cols: 3, rows: 5, color: '#E8DCCD', img: "url('../../assets/img/IMG_0412.JPG')"},
    {text: 'Thirteen', cols: 3, rows: 5, color: '#E8D4CD', img: "url('../../assets/img/rightSideKitchenRemoveBottleLabels.jpg')"},
  ];
  constructor() { }

  ngOnInit() {
  }

}