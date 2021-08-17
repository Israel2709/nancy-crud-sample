import React, { useState, useEffect } from 'react'
import api from './lib/api'
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState(null)
  const [userData, setUserData] = useState({})
  useEffect(async () => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const usersCollection = await api.getAllUsers()
    console.log(usersCollection)
    setUsers(usersCollection.data.users)
  }

  const changeHandler = event => {
    const property = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [property]: value })
  }

  const saveUserHandler = async () => {
    console.log(userData)
    const result = await api.saveUser(userData)
    console.log(result)
    getAllUsers()
  }

  const deleteUser = async event => {
    const userId = event.target.dataset.userId
    console.log(userId)
    const result = await api.deleteUserById(userId)
    console.log(result)
  }

  const editUser = async event => {
    const userId = event.target.dataset.userId
    console.log(userId)
    const result = await api.updateUserById(userId)
    console.log(result)
  }

  return (
    <div className="App">
      <div className="container fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" name="name" onChange={changeHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="">UserName</label>
                <input type="text" className="form-control" name="userName" onChange={changeHandler} />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" name="email" onChange={changeHandler} />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveUserHandler}>Guardar usuario</button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Name</th>
                  <th></th>
                  <th></th>
                </tr>

              </thead>
              <tbody>
                {
                  users && users.map(user => {
                    const { name, email, userName, _id } = user
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{userName}</td>
                        <td>
                          <div
                            className="btn btn-danger"
                            data-user-id={_id}
                            onClick={deleteUser}
                          >Borrar</div>
                        </td>
                        <td>
                          <div
                            className="btn btn-warning"
                            data-user-id={_id}
                            onClick={editUser}
                          >Editar</div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
