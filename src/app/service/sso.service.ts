import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class SsoService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/api/test';

  getTest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<{}>(this.url, httpOptions).pipe(
      tap(() => console.log(`got status`))
    );
  }
}
