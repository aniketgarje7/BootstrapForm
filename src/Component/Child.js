import React  from "react";
import Button from 'react-bootstrap/Button';

class Child extends React.Component{
    
    componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
    render(){
        return <h1>child</h1>
       {/* <Button variant="primary">Primary</Button>{'aniket '}</> */}
    }
}
export default Child;