import React, { Component } from 'react';
import { ACTIONS } from './Todos';
export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={ //ude the id from the todo- if i want to change the state we use setState(), it's an function on the class
            id: props.id,
            confirm: false
        }
    }

    render(){
        const {id, complete, text, dispatch} = this.props;

const confirmation = () => {
    if (window.confirm("Are you sure?")){
        this.setState({confirm: true}); //sets only the confirm state, not all the state like in hooks
        dispatch({
            type: ACTIONS.MARK_COMPLETE,
            payload: {id}
           })
        }
    }
     


       return (
            <li style={complete ? {'textDecoration':'line-through'}: {}} >      
           {this.state.id}     {/*show the id of the todo */}
              <a style={complete ? {'display': 'none'} : {}} href={'#'} onClick={confirmation}>Mark complete_
              </a>
              {text}
            </li>
    );
}
}