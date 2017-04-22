import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any
  constructor(public navCtrl: NavController, public http: Http) {
    this.posts = null;
    this.http.get('dev-drupal8-ionic.pantheonsite.io/blog-roll/rest-export').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
        console.log(this.posts);
    });
  }
}
