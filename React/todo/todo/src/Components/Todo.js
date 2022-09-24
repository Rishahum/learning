//rcc => react class component
import React, { Component } from 'react'

export default class todo extends Component {
  constructor(){
    super();
    this.state={
        tasks: [{id:1, task: "Revise" },
            {id:2, task: "Learn"},
        ]
    }
  }
  render(){
    return (
        <div>
        <input type="text"></input>
        <button >Submit</button>
        {
            this.state.tasks.map(function (taskobj){
                return(
                    <li>
                <p>{taskobj.task}</p>
                <button >Submit</button>
                </li>
                )
            })
        }
        </div>
    )
  }
}
