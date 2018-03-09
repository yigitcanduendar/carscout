import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pictureNr = 1
  }
  pictureNr: number;
  imgFiles: File[];


  public fileEvent($event) {
    if (this.pictureNr <= 5) {
      const selectedFile: File = $event.target.files[0];
      this.imgFiles[this.pictureNr - 1] = selectedFile;
      this.pictureNr++;
    }
  }

  public reachedMaximumAllowed(): boolean {
    return (this.pictureNr <= 5);
  }


}


}
