import {socket} from "./io"

socket.on("state",state=>{
  console.log("getInitalState",state)
});
console.log("it should work");
