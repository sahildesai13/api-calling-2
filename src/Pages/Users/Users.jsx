import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Loader from '../../Component/Loader/Loader';
function Users() {
    let [user, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h3 className='text-center text-white m-0 p-4' style={{ background: '#2b2d42' }}>Album</h3>
            {user.length === 0 ? <Loader /> : <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((ele) => {
                            return (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>{ele.address.street}, {ele.address.suite}, </td>
                                            </tr>
                                            <tr>
                                                <td>{ele.address.city}, {ele.address.zipcode}</td>
                                            </tr>
                                            <tr>
                                                <td>{ele.address.geo.lat}, {ele.address.geo.lng}</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>
                                    <td>
                                        <table>
                                            <tr>
                                                <td>{ele.company.name}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>}
        </div>
    )
}

export default Users