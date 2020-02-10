import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    localStorage.setItem('jwtToken', 'eyJhbGciOAIUzIlNiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXVoYW1tYWQgQm1sYWwiLCJpZCI6IjQzMjEiLCJOXQi0jElNjklNzYwNTIsImV4cCI6MTU2OT U3NjA2N30.i_ygUOJIytDCVobSmUclIVwwen9VIOhDERa0CpsGBH_s');
    return localStorage.getItem('jwtToken');
  }
}
