import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {  }


  private messagesUrl = 'api/MESSAGES';
  message: Message; 
  messages: Message[];
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl);
  }

  sortLike(): Observable<Message[]> {
    this.http.get<Message[]>(this.messagesUrl).subscribe(messages => this.messages = messages);
    let curr : Message;
    for(var i = 0; i<this.messages.length;  ++i) {
      for (let j=i+1; j<this.messages.length;++j) {
        if (this.messages[i].likeNumber>this.messages[i].likeNumber) {
          curr = this.messages[i];
          this.messages[i] = this.messages[j];
          this.messages[j] = curr;
        }
      }

    }
    return of(this.messages);
  }

  updateMessage(message: Message): Observable<any> {
    return this.http.put(this.messagesUrl, message, this.httpOptions)
  }

  getMessage(id: number): Observable<Message> {
    const url = `${this.messagesUrl}/${id}`;
    return this.http.get<Message>(url)
      // return of(HEROES.find(hero=>hero.id === id));
  }
                                          

}
