import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDcRreRW2PZ_Zd4mSmJa7i7wNV5rhnupVg",
  authDomain: "businesscontacts-77be3.firebaseapp.com",
  databaseURL: "https://businesscontacts-77be3.firebaseio.com",
  storageBucket: "businesscontacts-77be3.appspot.com",
  messagingSenderId: "243023914546"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
