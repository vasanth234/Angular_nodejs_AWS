import { Component } from '@angular/core';
import { Chat } from '../../services/chat';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matmodal',
  imports: [CommonModule,FormsModule],
  templateUrl: './matmodal.html',
  styleUrl: './matmodal.css',
})
export class Matmodal {

   messages: { role: string, text: string }[] = [];
  userInput: string = '';

  constructor(private chat:Chat,private http :HttpClient){

  }
  sendMessage() {
    if (!this.userInput.trim()) return;

    // 1. Add user message
    this.messages.push({ role: 'user', text: this.userInput });

    const question = this.userInput;
    this.userInput = '';

    // 2. Call backend (LLM)
    this.chat.sendMessage(question).subscribe(res => {
      // 3. Add bot response
      this.messages.push({ role: 'bot', text: res.reply });
    });
  }
}









