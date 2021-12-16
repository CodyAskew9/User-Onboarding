import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import schema from './validate/Schema';
import * as yup from 'yup';

// Information and initial states
const initialInfoValues = {
  // Text Inputs
      first_name: '',
      last_name: '',
      email: '',
      password: '',
  // Checkbox Inputs
      tos: false,
  }
  
  const initialInfoErrors = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    tos: false
  }
  // const initialSubmitValue = true

function App() {
  const [users, setUsers] = useState([])
  // const [disable, setDisable] = useState(initialSubmitValue)
  const [infoErrors, setInfoErrors] = useState(initialInfoErrors)
  const [infoValue, setInfoValue] = useState(initialInfoValues)

// Event handlers
const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setInfoErrors({ ...infoErrors, [name]: ''}))
  .catch(err => setInfoErrors({ ...infoErrors, [name]: err.errors[0]}))
}
const onSubmit = () => {
  axios.post('https://reqres.in/api/users', infoValue)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() => setInfoValue(initialInfoValues))
}
const handleChange = (name, value) =>{
  validate(name, value)
  setInfoValue({...infoValue, [name]:value
  })
}

// useEffect(() => {
//   schema.isValid(infoValue)
//   .then(valid => setDisable(!valid));
// }, [infoValue])

  return (
    <div className="App">
      <h1>Look At My Form!!!!</h1>
      <Form
      errors = {infoErrors}
      value = {infoValue}
      //  disable = {disable}
      change = {handleChange}
      submit = {onSubmit}
      />
      {users.map(user => (
        <div key={users.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
          </div>
      ))}
    </div>
  );
}

export default App;