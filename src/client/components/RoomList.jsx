import React,{Component} from "react"
class RoomList extends Component{

  isActive(room,CurrentRoom){
     return room.get("id")===currentRoom
  }
  render(){
     const {rooms,currentRoom}=this.props

     return (
       <div className="chat-room-list">
       {
         rooms.map((room,index)=>{
           <a className={this.isActive(room,currentRoom)?"active":""}
           key={index} href="#">
           {room.get("name")}
           </a>
         })
       }
       </div>
     )



 }


}

export default RoomList
