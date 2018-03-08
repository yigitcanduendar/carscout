import { Injectable } from '@angular/core';

@Injectable()
export class SearchServiceService {

  public data: Array<Object>;

  constructor() { }

  public setResult(data: Array<Object>) {
    this.data = data;
  }

  get results(): Array<Object> {
    return this.data;
  }
}
