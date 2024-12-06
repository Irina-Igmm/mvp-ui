import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiKey: string = 'YOUR_API_KEY'; // Replace with your OpenAI API key
  private apiUrl: string = 'https://api.openai.com/v1/chat/completions'; // OpenAI API endpoint

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const body = {
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}