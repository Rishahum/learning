//rcc => react class component
import React, { Component } from 'react'

export default class todo extends Component {
  constructor(){
    super();
    this.state={
        tasks: [{id:1, task: "Revise" },
            {id:2, task: "Learn"},
        ],
        curTask:" ",
    };
  }
  handleChange=(e)=>{
    this.setState({
      curTask:e.target.value,
    });
  };
  
  handleSubmit = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.curTask, id: this.state.tasks.length + 1 },
      ],
      curTask: "",
    });
  };
  handleDeleteTasks = (id) => {
    // let narr = [];
    let narr = this.state.tasks.filter((taskObj)=>{
      return taskObj.id != id;
    });
    this.setState({
      tasks: [...narr],
    });
  };
  // handleSubmit=()=>{
  //   this.setState({
  //     tasks:[...this.state.tasks,
  //       {
  //       task:this.state.curTask, id:this.state.tasks.length + 1
  //     }],
  //     curTask:""
  //   })
    //  handlesubmit=(e)=>{
    //   narr=this.state.filter((taskobj)=>{
    //     return taskobj!=id;
    //   })
    //   this.setState({
    //     tasks:[...narr],
    //   })
    //  }
  //}
  render(){
    return (
        <div>
        <input type="text"
        value={this.state.curTask}
        onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        {
            this.state.tasks.map(function (taskobj){
                return(
                    <li key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button onClick={()=>{this.handleDeleteTasks(taskobj.id)}}>Delete</button>
                </li>
                )
            })
        }
        </div>
    )
  }
}
