import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class badgeColor {
  color: Map<string, string> = new Map([
    [ "Pending" ,"warning"],
    [ "Approved" ,"success"],
    [ "Withdrawn" ,"primary"],
    [ "Invested" ,"secondary"],
    [ "Matured" ,"light"],
    [ "Requested" ,"info"],
    [ "Declined" , "danger"], 
   ]); 

  getClass(state: string):string {
    if(this.color.has(state)) return this.color.get(state);
    return "dark";
  }
}