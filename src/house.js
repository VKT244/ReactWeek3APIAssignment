import React from 'react';
import './App.css';
import NewRoomForm from './NewRoomForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
            <li key={index}>
                {room.name} Area: {room.area}
                <button type = "button" className = "btn btn-primary" onClick={e =>
                    this.props.deleteRoom(e, this.props.data, room)
                }>Delete</button>)
                </li>)
            : null;
    return (
        <div className = 'card'>
            <div className = 'card-title'>
                <h1>{this.props.data.name}</h1>
            </div>
            <div className = 'card-text'>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                insertNewRoom={this.props.insertNewRoom} data={this.props.data} />
            </div>
        </div>
        );        
    }
}