import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {
  firedata = firebase.database().ref('/users');
  constructor(public afireauth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
  }

  signup(){
    
  }

  // signup(newuser){
  //   var promise = new Promise((resolve, reject) => {
  //     this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
  //       this.afireauth.auth.currentUser.updateProfile({
  //         displayName: newuser.displayName
  //       }).then(() => {
  //         this.firedata.child(this.afireauth.auth.currentUser.uid).set({
  //           uid: this.afireauth.auth.currentUser.uid,
  //           displayName: newuser.displayName
  //         }).then(() => {
  //           resolve({ success: true });
  //           }).catch((err) => {
  //             reject(err);
  //         })
  //         }).catch((err) => {
  //           reject(err);
  //       })
  //     }).catch((err) => {
  //       reject(err);
  //     })
  //   })
  //   return promise;
  // }

}
