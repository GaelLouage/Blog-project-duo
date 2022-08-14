import { Injectable, Input } from '@angular/core';
import usersComment from '../assets/usersComment.json';

@Injectable({
  providedIn: 'root'
})
export class CommentVideoService {
  usersComments:any = usersComment;
  getUsersCommentsVideoOne():any {
    return usersComment;
  }
  addUserComment(icons:string, names:string, comments?:any):any {
    this.usersComments.push({id:usersComment.length,icon:icons, name:names, comment:comments, color:"yellow"});
  }
  deleteUserComment(indexOne:number,indexTwo:number) {
    // this.usersComments.pop();
      this.usersComments.splice(indexOne,indexTwo);
  }
  constructor() { }
}