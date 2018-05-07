import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderComponent } from './image-uploader.component';

describe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;
  let file: File;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     let content = "testtestestestestest";
    let data = new Blob([content], { type: 'image/zip' });
    let blobArray = new Array<Blob>(); blobArray.push(data);
    file = new File(blobArray, "testimage.jpg", { type: 'image/jpeg' });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set a Selected File', () => {
    component.setSelectedImageFile(file);
    expect(component.getSelectedImageFile()).toBe(file);
  });

  it('after successful onSubmit pictureNr should increasee by 1', () => {
    let oldpictureNr = component.getPictureNr();
   
    component.setSelectedImageFile(file);
    ImageUploaderComponent.setOfferID(0);
    component.onSubmit();
    expect(comnponent.getPictureNr()).toBeGreaterThan(oldpictureNr);
  });

});
