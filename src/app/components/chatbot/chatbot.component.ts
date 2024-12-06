// chatbot.component.ts
import { Component, ElementRef, ViewChild, AfterViewChecked, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChatService } from '../../services/chat.service';

interface Message {
  id: number;
  text: string;
  type: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations: [
    trigger('messageAnimation', [
      state('user', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('bot', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':enter', [
        style({
          transform: 'translateX(20px)',
          opacity: 0
        }),
        animate('300ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('chatbotToggle', [
      transition(':enter', [
        style({
          transform: 'scale(0.8)',
          opacity: 0
        }),
        animate('200ms ease-out', style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'scale(0.8)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer: any;

  userMessage: string = '';
  messages: Message[] = [];
  isChatbotVisible: boolean = false;

  constructor(private chatService: ChatService) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: this.userMessage,
      type: 'user'
    };
    this.messages.push(userMessage);

    // Call chat service
    this.chatService.sendMessage(this.userMessage).subscribe({
      next: (response: string) => {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: response,
          type: 'bot'
        };
        this.messages.push(botMessage);
      },
      error: (error) => {
        const errorMessage: Message = {
          id: Date.now() + 2,
          text: 'Désolé, une erreur est survenue.',
          type: 'bot'
        };
        this.messages.push(errorMessage);
      }
    });

    // Reset input
    this.userMessage = '';
  }

  private scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }
}
