import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import {BlogCreatePage} from "../blog-create/blog-create";

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {
  posts: any = []
  constructor(public navCtrl: NavController, public _data: Data) {
    this._data.Posts.subscribe((post) => { this.posts.push(post)})
  }

  createBlog() {
    this.navCtrl.push(BlogCreatePage);
  }

}
