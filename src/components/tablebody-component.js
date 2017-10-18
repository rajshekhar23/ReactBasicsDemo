import React from 'react'
import User from './user-component'

class TableBody extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users:this.props.users
        }
    }

    removeUser(index) {
        this
            .props
            .users
            .splice(index, 1)
        this.setState({users: this.state.users, selectedUser: ''})
    }


    render() {
        return (
            <tbody>
                {this
                    .props
                    .users
                    .map((user, index) => <User
                        key={user.id}
                        username={user.username}
                        age={user.age}
                        city={user.city}
                        index={index}
                        removeUser={this
                        .removeUser
                        .bind(this, index)}
                        handleUserEdit={this.props.handleUserEdit}/>)}
            </tbody>
        )
    }
}

export default TableBody