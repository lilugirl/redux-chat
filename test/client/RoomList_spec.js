import React from "react"
import ReactDOM from "react-dom"
import {fromJS,Map,List} from "immutable"
import {expect} from "chai"

import RoomList from "../../src/client/components/RoomList"


import TestUtil,{
 Simulate,
 renderIntoDocument,
 isCompositeComponentWithType,
 scryRenderedDOMComponentsWithTag,
 scryRenderedDOMComponentsWithClass
} from "react-addons-test-utils"


describe("RoomList组件",()=>{
  it("render roomlist",()=>{

  const rooms=fromJS([
    {id:"0",name:"room",owner:"lilu"},
    {id:"1",name:"room2",owner:"liuyi"},
   ])

  const component=renderIntoDocument(
    <RoomList rooms={rooms} currentRoom="1 " />
  )


  })
})
