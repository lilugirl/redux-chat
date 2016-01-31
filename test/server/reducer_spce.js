import {expect} from "chai"
import {fromJS,Map,List} from "immutable"
import {v1} from "uuid"

import coreReducer from "../../src/server/reducer"
import {addRoom,removeRoom} from "../../src/server/actionCreator"

describe("server端核心Reducer",()=>{
  it("可以当作一个reducer",()=>{
   var id=v1()
   var actions=[
     {type:"ADD_ROOM",room:{id,name:"1",owner:"lilu"}},
     {type:"ADD_ROOM",room:{name:"2",owner:"liuyi"}},
     {type:"ADD_ROOM",room:{name:"3",owner:"lilu"}},
     {type:"REMOVE_ROOM",payload:{id:id,user:"lilu"}}
   ]

   const finalState=actions.reduce(coreReducer,undefined)
   console.log(finalState)
   expect(finalState.get("rooms").size).to.equal(2)
   expect(finalState.getIn(["rooms",0,"owner"])).to.equal("liuyi")
 })

 it("使用actionCreator",()=>{
   var id=v1()
   var actions=[
     addRoom({id,name:"1",owner:"lilu"}),
     addRoom({name:"2",owner:"liuyi"}),
     addRoom({name:"3",owner:"lilu"}),
     removeRoom({id:id,user:"lilu"}),
   ]

     const finalState=actions.reduce(coreReducer,undefined)
     console.log(finalState)
     expect(finalState.get("rooms").size).to.equal(2)
     expect(finalState.getIn(["rooms",0,"owner"])).to.equal("liuyi")
 })
})
