import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'password': '',
        'gender': 'Male',
        'caste': 'General',
        't&c': false,
    })
    const handleChange = (event) => {
        if (event.target.name === 't&c') {
            setFormData({
                ...formData,
                [event.target.name]: event.target.checked,
            })
            return
        }
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nGender: ${formData.gender}\nCaste: ${formData.caste}\nTemrs & Conditions: ${formData['t&c']}`)
    }
    return (
        <>
            <h3>Registartion Form</h3>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' value={formData.name} placeholder='Enter your name' onChange={handleChange} /><br />
                <input type="email" name="email" value={formData.email} placeholder='Enter your email' onChange={handleChange} /><br />
                <input type="password" name="password" value={formData.password} placeholder='Enter your password' onChange={handleChange} /><br />
                <div>
                    <fieldset>
                        <legend>Select Gender</legend>
                        <label>
                            <input type="radio" name="gender" value='Male' checked={formData.gender === 'Male'} onChange={handleChange} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value='Female' checked={formData.gender === 'Female'} onChange={handleChange} />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value='Others' checked={formData.gender === 'Others'} onChange={handleChange} />
                            Others
                        </label>
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="caste">Select Caste</label>
                    <select name="caste" id='caste' value={formData.caste} onChange={handleChange}>
                        <option value="SC/ST">SC/ST</option>
                        <option value="OBC">OBC</option>
                        <option value="General">General</option>
                    </select>
                </div>
                <label htmlFor="t&c">
                    <input type="checkbox" checked={formData['t&c']} name='t&c' id="t&c" onChange={handleChange} />
                    Temrs & Conditions
                </label><br />
                <input type="submit" value="Submit Form" />
            </form>
        </>
    )
}

export default RegistrationForm