import React from 'react'

class TableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th colSpan='6'>
                        <span
                            data-toggle='modal'
                            data-target='#addUser'
                            className="btn btn-primary addUser glyphicon glyphicon-plus"></span>
                    </th>
                </tr>
                <tr className='warning'>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Details</th>
                    <th>Remove</th>
                </tr>
            </thead>

        )
    }
}

export default TableHead