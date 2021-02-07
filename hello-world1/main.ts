import {example} from './Example';
let log=(msg)=> console.log(msg);
log("hello");
let c: any[]=[true,'s',8 ];
console.log(c);

enum Color {Red,Green,Blue};
let backgroundColor=Color.Red;
console.log(backgroundColor);
let message="abc";
message.endsWith('C');

let x =new example(5);
let i=x.S;
x.S=10;
console.log(x.S);
console.log(i);


