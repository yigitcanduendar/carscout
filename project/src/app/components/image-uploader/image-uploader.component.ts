import { OfferRouter } from './../../../../../backend/src/routes/OfferRouter';
import { MessageProviderService } from './../../services/messageprovider.service';
import { Component, OnInit } from '@angular/core';
import { MessageType } from '../../model/messagetype.enum';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private pictureNr: number = 1;
  private underUploadLimit: boolean = true;
  private MAXIMUM_NUMBER_OF_PICTURES: number = 5;
  private selectedFile: File;
  private static offerID: number = 0;
  private messageService: MessageProviderService;
  private offerRouter: OfferRouter

  public fileChangeEvent($event) {
    this.underUploadLimit = (this.pictureNr <= this.MAXIMUM_NUMBER_OF_PICTURES);
    if (this.underUploadLimit) {
      this.selectedFile = $event.target.files[0];
    }

  }

  getSelectedImageFile(): File {
    return this.selectedFile;
  }

   setSelectedImageFile(file: File) {
     this.selectedFile = file;
  }

  setMaximumNumberOfPictures(number: number) {
    this.MAXIMUM_NUMBER_OF_PICTURES = number;
  }

  /**
   * Muss vor Benutzung des FileUploader benutzt werden, um festzulegen, für welches Angebot diese Bilder hochgeladen werden.
   * @param id id des Angebots
   */
  public static setOfferID(id: number) {
    this.offerID = id;
  }

  public getPictureNr(){
    return this.pictureNr;
  }

  onSubmit() {
    if (OfferRouter.saveImageForOffer(ImageUploaderComponent.offerID, this.pictureNr, this.selectedFile).toString()==="200 Ok. Image saved succesfully") {
      this.pictureNr++;
    } else {
      this.messageService.display("Bild konnte nicht hochgeladen werden!", MessageType.warning);
    }

  }
}


