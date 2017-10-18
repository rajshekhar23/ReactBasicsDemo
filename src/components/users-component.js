import React from 'react'
import users from '../store/users-list'
import '../App.css'
import AddUser from './adduser-component'
import UserDetail from './userdetail-component'
import TableHead from './tablehead-component'
import TableBody from './tablebody-component'

class Users extends React.Component {

    constructor() {
        super()
        this.state = {
            users: users,
            username: '',
            age: '',
            city: '',
            selectedUser: null
        }
        this.handleUserEdit = this.handleUserEdit.bind(this)
    }

    handleInput(event) {
        let newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    handleUserEdit(index) {
        this.setState({
            selectedUser: users[index]
        }, () => console.log(this.state.selectedUser));
    }

    handleAddUserSubmit(event) {
        event.preventDefault()
        let formData = {
            id: this.state.users.length + 1,
            username: this.state.username,
            age: this.state.age,
            city: this.state.city
        }
        this.setState({
            users: [
                ...users,
                formData
            ]
        })
    }

    render() {
        return (
            <div className='table-responsive'>
                <h2 className='text-center'>Users List</h2>
                <table className='table table-bordered table-stripped table-hover'>
                    <TableHead/>
                    <TableBody users={this.state.users} handleUserEdit={this.handleUserEdit} />
                </table>
                <AddUser
                    changeInput={this
                    .handleInput
                    .bind(this)}
                    username={this.state.username}
                    age={this.state.age}
                    city={this.state.city}
                    handleAddUserSubmit={this
                    .handleAddUserSubmit
                    .bind(this)}/>

                    { this.state.selectedUser && <UserDetail
                    username={this.state.selectedUser.username}
                    age={this.state.selectedUser.age}
                    city={this.state.selectedUser.city}/>}
            </div>
        )
    }
}

export default Users;