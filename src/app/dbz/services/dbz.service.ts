import { Injectable } from "@angular/core";


@Injectable()
export class DbzService {

  constructor() {
    console.log('servicio incializado')
  }

}

// el servicio no se ejecutara hasta que alguien lo requiera.
