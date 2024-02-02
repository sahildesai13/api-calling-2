import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../../Component/Loader/Loader';
import { Table } from 'react-bootstrap';
function Album() {
    let [album, setAlbum] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                setAlbum(response.data);
                // console.log(album);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h3 className='text-center text-white m-0 p-4' style={{ background: '#2b2d42' }}>Album</h3>
            {album.length === 0 ? <Loader /> :
                <Table responsive striped="columns" variant="dark">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           album.map((ele)=>{
                            return(
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                </tr>
                            )
                           })
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Album