import React from 'react'

class AddUser extends React.Component {
    render() {
        return (
            <div className="modal fade" id="addUser" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">New User</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal" onSubmit={this.props.handleAddUserSubmit}>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label" htmlFor="inputEmail3">Name</label>
                                    <div className="col-sm-7">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Name"
                                            onChange={this.props.changeInput}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label" htmlFor="inputPassword3">Age</label>
                                    <div className="col-sm-7">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="age"
                                            placeholder="Age"
                                            onChange={this.props.changeInput}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-3 control-label" htmlFor="inputEmail3">City</label>
                                    <div className="col-sm-7">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="city"
                                            placeholder="City"
                                            onChange={this.props.changeInput}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-sm-offset-2 col-sm-6 control-label"
                                        htmlFor="inputPassword3"></label>
                                    <div className="col-sm-4">
                                        <input type="submit" className="btn btn-success"  value="ADD"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser