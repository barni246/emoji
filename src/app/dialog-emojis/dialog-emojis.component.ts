import { Component } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-dialog-emojis',
  templateUrl: './dialog-emojis.component.html',
  styleUrls: ['./dialog-emojis.component.scss']
})
export class DialogEmojisComponent {

constructor(public chatService: ChatServiceService){

}

  addEmoji(event) {
    const emojiNative: string = event.emoji.native;
    this.chatService.messageFromChat += emojiNative;
  }
}
