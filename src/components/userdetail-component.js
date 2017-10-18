import React from 'react'

class UserDetail extends React.Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading text-center">User Details</div>
                    <div className="panel-body">
                        <b>Name {this.props.username}</b><br/>
                        <b>
                            Age  {this.props.age}</b><br/>
                        <b>
                            City  {this.props.city}</b><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetail