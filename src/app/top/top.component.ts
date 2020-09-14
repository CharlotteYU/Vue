import { Component, OnInit, OnDestroy,AfterViewInit,Inject } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog} from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  messages: Message[];

  private timer;
  constructor(private messageService: MessagesService,public dialog: MatDialog,private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.getLength();
    this.getPage(); 
    this.getMessages();
  }

  // timer for updateTime task


  today:any = Date.now();//或者today:any = new Date();
  time: any;
  diffTime: number;
  diffTimeSec: number;
  hour: number;
  minute: number;
  day: number;


  // main function for updating time NGTEMPLaTE/NGCONTAINER
  updateTime(id:number): void {
      
      this.diffTime = this.today- this.returnMessage(id).time
      this.calTime(this.diffTime);
  
}

  //calculate time 
  calTime( val: number) : void {
    this.diffTimeSec = Math.floor(val / 1000);
    this.hour = Math.floor((this.diffTimeSec %(3600*24)) / 3600);
    this.day = Math.floor(this.diffTimeSec/(3600*24));
    this.minute = Math.floor((this.diffTimeSec % 3600) / 60);
  }

  //get main site
  
  firstIndex: number;
  secondIndex: number;
  thirdIndex: number;
  length:number;
  message: Message;
  mainSite: string;
  

  getIndex(id:number): void {
    this.getMessage(id);
    this.firstIndex = this.message.link.indexOf("/")+1;
    this.secondIndex = this.message.link.indexOf("/",this.firstIndex+1);
    this.mainSite = this.message.link.substring(this.firstIndex+1,this.secondIndex);


  }



  getMessage(id: number): void{
    var len = this.messages.length;
    for (var i = 0;i<len;i++) {
      if (this.messages[i].id == id) {
        this.message = this.messages[i];
        break;
      }     
    }
  } 

  temp: Message;
  returnMessage(id:number): Message {
    var len = this.messages.length;
    for (var i = 0;i<len;i++) {
      if (this.messages[i].id == id) {
        this.temp = this.messages[i];
        return this.temp;
      }     
    }
    return;
  }

  plusOne(id:number): void{
    this.getMessage(id);
    this.message.likeNumber++;
    this.messageService.updateMessage(this.message).subscribe()
    this.getMessages();
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {message: this.returnMessage(id).title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.returnMessage(id);
      if (result.trim() !=""){
        this.temp.title = result;
        this.temp.time = this.today;
      }
      this.messageService.updateMessage(this.temp).subscribe()
    });


  }


  sort(messages: Message[]) : Message[]{
    let curr : Message;
    for(let i = 0; i<messages.length;  ++i) {
      for (let j=i+1; j<messages.length;++j) {
        if (messages[i].likeNumber < messages[j].likeNumber) {
          
          curr = messages[i];
          messages[i] = messages[j];
          messages[j] = curr;
        }
      }

    }
    return messages;
  }

  //get messages list
  getMessages(): void {
      this.messageService.getMessages().subscribe(messages => this.messages = this.sort(messages).slice(10*(this.page-1),10*this.page));
  }



  len: number;
  page: number;


  getPage(): void {
    this.page = +this.route.snapshot.paramMap.get('page');
  }
  
  getLength(): void {
    this.messageService.getMessages().subscribe(messages => this.len = Math.floor(messages.length/10)+1);
  }

  updateMinus(): void {
    if(this.page >  1) {
      this.page--;
      this.getMessages();
    } 

  }

  updatePlus(): void {
    if(this.page<this.len) {
      this.page++;
      this.getMessages();
    }

  }

  updateOne(): void {
    this.page = 1;
    this.getMessages();
  }

  updateLast(): void {
    this.page = this.len;
    this.getMessages();
  }


}

