import { useState, useEffect } from "react";


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [usertype, setUsertype] = useState('');
    const [bio, setBio] = useState('');
    const [signup, setSignup] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = []
        if (!name) errors.push('need to type a name');
        if (!email) errors.push('need to type a email');
        if (!phonenumber) errors.push('need to type a phonenumber');
        if (!usertype) errors.push('need to select a usertype');
        if (!bio) errors.push('need to type a bio');
        setValidationErrors(errors)
    }, [name, email, phonenumber, usertype, bio, signup])

    let onSubmit = (e) => {
        e.preventDefault()

    }

    return(
        <div>
            {validationErrors.length &&
            validationErrors.map(err => err)}

            <form className='' onSubmit={onSubmit}>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} >Name</input>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}>Email</input>
                <input type="text" placeholder='Phone number' onChange={(e) => setPhonenumber(e.target.value)}>Phone number</input>
                <input type='radio' id='instructor' name='instructor' onChange={(e) => setUsertype('Instructor')}></input>
                    <label HTMLfor='instructor'>Instructor</label>
                <input type='radio' id='Student' name='Student' onChange={(e) => setUsertype('Student')}></input>
                    <label HTMLfor='Student'>Student</label>
                <textarea onChange={(e) => setBio(e.target.value)}>Bio</textarea>
                <input type="checkbox" onChange={(e) => setSignup(e.target.checked)}>Sign up for email notifications</input>
            </form>
        </div>
    )
}
export default Form;
