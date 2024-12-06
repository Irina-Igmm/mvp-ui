import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chatbot',
  template: `
    <header>
      <!-- Header content here -->
    </header>
  `,
  styleUrls: ['./chatbot.component.css']
})


export class ChatbotComponent {
  userMessage: string = '';
  chatHistory: { user: string; bot: string }[] = [];
  isChatVisible: boolean = false;

  constructor(private chatService: ChatService) { }

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      this.chatHistory.push({ user: this.userMessage, bot: '' });
      this.chatService.sendMessage(this.userMessage).subscribe((response: string) => {
        this.chatHistory[this.chatHistory.length - 1].bot = response;
      });
      this.userMessage = '';
    }
  }
}