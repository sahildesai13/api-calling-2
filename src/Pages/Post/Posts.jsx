import React, { useEffect, useState } from 'react';
import './Posts.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Loader from '../../Component/Loader/Loader';

function Posts() {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (

    <div>
      <h3 className='text-center text-white m-0 p-4' style={{ background: '#2b2d42' }}>Post</h3>
      {data.length === 0 ? <Loader /> :
        <Table responsive striped="columns" variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody >
            {data.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
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

export default Posts