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
        let regexPhone = /\d\d\d-\d\d\d-\d\d\d\d/
        let regexEmail = /.+@.+\.(com)/
        if (!name) errors.push('need to type a name');
        if (!email) errors.push('need to type a email');
        if (!phonenumber) errors.push('need to type a phonenumber');
        if (!usertype) errors.push('need to select a usertype');
        if (!bio) errors.push('need to type a bio');
        if (bio.length > 280) errors.push("max bio char limit of 280")
        if (!email.match(regexEmail)) errors.push("incorrect email format")
        if(!phonenumber.match(regexPhone)) errors.push("incorrect phone format")
        setValidationErrors(errors)
    }, [name, email, phonenumber, usertype, bio, signup])

    console.log(phonenumber.length)
    let onSubmit = (e) => {
        e.preventDefault()

    }
    return(
        <div>
            {validationErrors &&
            validationErrors.map(err => {
                return <div>{err}</div>
                })}
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Phone number' onChange={(e) => setPhonenumber(e.target.value)}/>
                <input type='radio' id='instructor' name='instructor' onChange={(e) => setUsertype('Instructor')}/>
                <label htmlFor='instructor'>Instructor</label>
                <input type='radio' id='Student' name='Student' onChange={(e) => setUsertype('Student')}/>
                <label htmlFor='Student'>Student</label>
                <textarea onChange={(e) => setBio(e.target.value)} placeholder = "Bio"></textarea>
                <input type="checkbox" onChange={(e) => setSignup(e.target.checked)}/>Sign up for email notifications
                <input type = "submit" value = "submit"></input>
            </form>
        </div>
    )
}
export default Form;
