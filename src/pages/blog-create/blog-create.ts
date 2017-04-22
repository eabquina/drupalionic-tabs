import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import {BlogPage} from "../blog/blog";

class Post {
  title: string
  body: string
  nid: string

  constructor() {}
}

@Component({
  selector: 'page-blog-create',
  templateUrl: 'blog-create.html'
})
export class BlogCreatePage {
 post: Post = new Post()
  constructor(public navCtrl: NavController, public _data: Data) {

  }

  post_data() {
    this._data.addPost(this.post)
    this.post = new Post()
    this.navCtrl.popTo(BlogPage)
    //this.navCtrl.parent.select(0)
  }

}
