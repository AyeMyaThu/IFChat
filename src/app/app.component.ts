import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBSkt0IowehBQiSv6In1HqJh8mYRSr1p9c",
    authDomain: "ionicchatapp-6da25.firebaseapp.com",
    databaseURL: "https://ionicchatapp-6da25.firebaseio.com",
    projectId: "ionicchatapp-6da25",
    storageBucket: "ionicchatapp-6da25.appspot.com",
    messagingSenderId: "147852898346"
  };
  firebase.initializeApp(config);

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

