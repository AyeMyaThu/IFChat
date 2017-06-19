import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newuser = {
    email: '',
    password: '',
    username: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider, public loadingcon: LoadingController, public toastcon: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    var toaster = this.toastcon.create({
      duration: 3000,
      position: 'bottom'
    });

    if(this.newuser.email == '' || this.newuser.password == '' || this.newuser.username == ''){
      toaster.setMessage('Please complete all the fields');
      toaster.present();
    } else if(this.newuser.password.length < 7){
      toaster.setMessage('Please give the password at least six characters').present();
    } else {
      let loader = this.loadingcon.create({
        content: 'Please wait'
      });
      loader.present();
      // this.userservice.signup(this.newuser).then((res: any) => {
      //   loader.dismiss();
      //   if(res.success)
      //     toaster.setMessage('Success Signup').present();
      //   else
      //     alert('Error' + res);
      // })
    }
  }

}
