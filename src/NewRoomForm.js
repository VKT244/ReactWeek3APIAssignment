import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class NewRoomForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameValue: '',
            areavalue: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleNameChange(e){
        this.setState({nameValue: e.target.value});
    }
    handleAreaChange(e){
        this.setState({areavalue: e.target.value});
    }
    handleClick(e){
        this.props.insertNewRoom(e, this.props.data,
            {name: this.state.nameValue, area: this.state.areaValue});
            this.setState({nameValue: '', areavalue: ''});
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue}></input>
                <input type="text" placeholder="Area" onChange={this.handleAreaChange} value={this.state.areavalue}></input>
                <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Add Room</button>
            </div>
        )
    }
}
