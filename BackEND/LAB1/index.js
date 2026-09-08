import {EventEmitter} from "node:events";
const task =new EventEmitter();
//register listener 
task.on("greet",(name)=>{
    console.log(`hello,${name}! welcome to session`);
});
task.on("exit",(reason)=>{
    console.log(`session ending .Reason :${reason}`);
});
task.on("greet",()=>{
    console.log(`class started by`);
});
task.on("exit",(exit)=>{
    console.log('class finished');
});
task.on("start",(course)=>{
    console.log(`${course} started`);
});
//emit events
task.emit("greet","student");
task.emit("exit","class completed");
task.emit("start","fsd");
 