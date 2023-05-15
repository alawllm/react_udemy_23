import { useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        //1. confirm that the password matches
        //2. see if the user has already been authenticated
        //3. create a user document from what the function returns
        //authenticated user with email and passwort
        //.. pass display name

        // await createAuthUserWithEmailAndPassword(auth,email, password)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        //spreading the object, modifying one value
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign up with your email and password!</h1>
            <form onSubmit={() => { }} action="">
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default SignUpForm;