import React from 'react';

export default function Form (props){
    const { submit, change, errors} = props
    const {first_name, last_name, email, password, tos} = props.value

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const newInfoVal = type === 'checkbox' ? checked : value;
        change(name, newInfoVal)
    }

    const onSubmit = (evt) =>{
        evt.preventDefault()
        submit()
    }
        return (
        <div>
                {/* Error Messages */}
            <div className = 'errors'>
                <p>{errors.first_name}</p>
                <p>{errors.last_name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
            </div>
            <form className = 'form container' onSubmit = {onSubmit}>
                {/* Text Inputs */}
                <div className = 'create-user inputs'>
                    <h2>Information</h2>
                    <label htmlFor= 'first_name'>First Name
                        <input
                            value = {first_name}
                            type = 'text'
                            name = 'first_name'
                            onChange = {onChange}
                        />
                    </label>
                    <label htmlFor= 'last_name'>Last Name
                        <input
                            value = {last_name}
                            type = 'text'
                            name = 'last_name'
                            onChange = {onChange}
                        />
                    </label>
                    <label htmlFor='email'>Email
                        <input
                            value = {email}
                            type = 'text'
                            name = 'email'
                            onChange = {onChange}
                        />
                    </label>
                    <label htmlFor='password'>Password
                        <input
                            value = {password}
                            type = 'password'
                            name = 'password'
                            onChange = {onChange}
                        />
                    </label>
                </div>

                <div className = 'create-user checkboxes'>
                    <h2>Terms of Service</h2>
                    {/* Checkbox Inputs */}
                    <label htmlFor='tos'>Terms Of Service
                        <input
                            value = {tos}
                            type = 'checkbox'
                            name = 'tos'
                            onChange = {onChange}
                            checked = {tos}
                        />
                    </label>
                </div>

                {/* Submit button */}
                <div className = 'create-user submit'>
                    <input type = 'submit' value= 'Create User'/>
                </div>
    
            </form>
        </div>
        )
}