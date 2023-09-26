import { Component } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import { DialogEmojisComponent } from '../dialog-emojis/dialog-emojis.component';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mainpage-chat',
  templateUrl: './mainpage-chat.component.html',
  styleUrls: ['./mainpage-chat.component.scss']
})
export class MainpageChatComponent {
message:string = '.';
isContainerVisible = false;

constructor(public chatService: ChatServiceService,public dialog: MatDialog) {

}

toggleContainer() {
  this.isContainerVisible = !this.isContainerVisible;
}

 addEmoji(event) {
   const emojiNative: string = event.emoji.native;
   this.message += emojiNative;
 
 }

sendMessageToDirectMessage() {
this.chatService.messageFromChat = this.message;
}

openDialog() {
  const dialogRef = this.dialog.open(DialogEmojisComponent);
 
  
}


}
