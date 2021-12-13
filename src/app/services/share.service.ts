import { AotSummaryResolver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  
  data={
    name:'asma',
    last:'kacem',
    country:'tunisia'

  }

  constructor() {}

   affiche(){
     console.log(this.data.name)
  }
}
