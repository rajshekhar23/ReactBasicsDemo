import React from 'react'

class User extends React.Component {

    constructor(props) {
        super(props);
    };
    
    render() {
        return <tr>
            <td>{this.props.username}</td>
            <td>{this.props.age}</td>
            <td>{this.props.city}</td>
            <td>
                <span
                    className="btn btn-success glyphicon glyphicon-info-sign"
                    onClick={() => this.props.handleUserEdit(this.props.index)}></span>
            </td>
            <td>
                <span
                    className="btn btn-warning glyphicon glyphicon-remove"
                    onClick={this.props.removeUser}></span>
            </td>
        </tr>
    }
}

export default User