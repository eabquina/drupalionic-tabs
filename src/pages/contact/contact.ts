import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

class Feedback {
  name: string
  email: string
  subject: string
  message: string

  constructor() {}
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  feedback: Feedback = new Feedback()
  constructor(public navCtrl: NavController) {

  }

  submit() {
    this.navCtrl.parent.select(0)
  }

}
