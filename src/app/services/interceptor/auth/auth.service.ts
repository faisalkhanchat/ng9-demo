import { environment } from 'src/environments/environment';
import { StorageService } from './../../storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }


  authorization() {
    const token = this.storage.token;
    const auth = {
      authorization: token ? 'Bearer ' + token : environment.FINGER_PRINT,
      api_key: environment.API_KEY,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    // console.log(auth);
    
    return auth;
  }
































}
