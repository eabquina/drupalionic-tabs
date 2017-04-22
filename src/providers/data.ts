import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {Http, Headers} from '@angular/http';

/*
  Generated class for the BlogData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  posts: ReplaySubject<{}> = new ReplaySubject<{}>()
  http: Http
  constructor() {
    
  }
  get Posts() {
    return this.posts;
  }
  
  getArticles() {
    return this.http.get('http://dev-drupal8-ionic.pantheonsite.io/blog-roll/rest-export');
  }

  addPost(post) {
    this.posts.next(post)
  }
}
