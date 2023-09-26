import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogEmojisComponent } from './dialog-emojis/dialog-emojis.component';
import { MainpageChatComponent } from './mainpage-chat/mainpage-chat.component';
import { MainpageDirectMessageComponent } from './mainpage-direct-message/mainpage-direct-message.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DialogEmojisComponent,
    MainpageChatComponent,
    MainpageDirectMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerComponent,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
