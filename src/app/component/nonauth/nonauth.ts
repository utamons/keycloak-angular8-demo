import {Component} from '@angular/core';
import {SsoService} from '../../service/sso.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nonauth',
  templateUrl: './nonauth.html',
  styleUrls: ['./nonauth.css']
})

export class NonAuthComponent {

  test: string;

  constructor(private activatedRoute: ActivatedRoute, private ssoService: SsoService) {
    this.test = 'idle';
  }

  getNonAuth() {
    this.ssoService.getNonAuth().subscribe(
      result => {
        this.test = result;
      },
      error => {
        this.test = error.error && error.error.message ? error.error.message : error.message;
      });
  }
}
