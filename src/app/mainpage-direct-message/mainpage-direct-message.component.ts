import { Component } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import { DialogEmojisComponent } from '../dialog-emojis/dialog-emojis.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mainpage-direct-message',
  templateUrl: './mainpage-direct-message.component.html',
  styleUrls: ['./mainpage-direct-message.component.scss']
})
export class MainpageDirectMessageComponent {
  messageFromChatTextArea:any;
  editableMessage:any;
  isContainerVisible = false;
  constructor(public chatService: ChatServiceService,public dialog: MatDialog) {
   

  }

  addEmoji(event) {
    const emojiNative: string = event.emoji.native;
    this.editableMessage += emojiNative;
  
  }

  toggleContainer() {
    this.isContainerVisible = !this.isContainerVisible;
  }

  editMessage() {
    this.editableMessage =  this.chatService.messageFromChat;
  }


  saveEditMessage() {
    this.chatService.messageFromChat = this.editableMessage;
    this.editableMessage = '';
  }
 

  
  openDialog() {
    this.dialog.open(DialogEmojisComponent);

   
  }
}
