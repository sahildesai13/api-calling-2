import React from 'react'
import './Comments.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loader from '../../Component/Loader/Loader';
function Comments() {
  let [info, setInfo] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        setInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <div>
      <h3 className='text-center text-white m-0 p-4' style={{ background: '#2b2d42' }}>Comments</h3>
      {info.length === 0 ? <Loader /> : <Table responsive striped="columns" variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody >
          {
            info.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.body}</td>
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

export default Comments