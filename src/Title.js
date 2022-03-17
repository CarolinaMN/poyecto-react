import React, { Component } from 'react';
import Welcome from './Welcome';
import { ContextT }  from './context';

// export const ContextT = React.createContext("sdsd");

class Title extends Component{
    static contextType = ContextT;

    render(){
      return(
        <div>
          <div>
            <span>{this.context}</span>
            <Welcome></Welcome>
          </div>
        </div>
      )
    }
}



export default Title;