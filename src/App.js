import React  from "react"
import Child from './Component/Child'

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        count:0,
        child:true
      }

    
  }
  render(){
    return <>
       <h1>APP</h1>
       <h1>{this.state.count}</h1>
       <button onClick={()=>{this.setState({count:8})}}>increament</button>
       {this.state.child && <Child/>}
        <button onClick={()=>{this.setState({child:!this.state.child})}}>willUnmoun</button>
       </>
    }
}

export default App