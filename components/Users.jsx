import React, { useState } from 'react';



const Users = () => {
    const initialState = () => {
        const list = localStorage.getItem('users');
        if (list) {
            return JSON.parse(list)
        } else {
            return {}
        }

    }

    const [state, setstate] = useState(initialState)



    return (
        <>
            <div className="w-75 m-auto p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Users Registered</h3>
                    <button className="btn btn-outline-primary" onClick={() => setstate(initialState)}>Update</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>S.No.</th>
                                <th>Firstname</th>
                                {/* <th>Lastname</th> */}
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                Object.entries(state).map((val, ind) => {
                                    console.log(val)
                                    return (

                                        <tr key={ind}>
                                            <td>{ind + 1}</td>
                                            <td>{val[0]}</td>
                                            <td>{val[1].inputEmail}</td>
                                            {/* <td>{val[1].subject}</td> */}
                                        </tr>
                                    )

                                })



                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Users
