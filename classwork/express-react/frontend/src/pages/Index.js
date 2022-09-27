import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Index = (props) => {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: ""
    })

    // handleChange function for form
    const handleChange = (event) => {
        // event.target.name is in [] in order to dynamically update it
        // that way we can have multiple 'inputs' with different 'name' properties use
        // the handleChange() method
        // similar to Object[key] = value
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        // createPeople is passed from Main.js
        props.createPeople(newForm)
        setNewForm({
            name: "",
            image: "",
            title: ""
        })
    }
    const loaded = () => {
        // people is being passed from Main.js
        return props.people.map((person) => (
            <div
                key={person.id}
                className="person"
            >
                <Link to={`/people/${person._id}`}><h1>{person.name}</h1></Link>
                <img src={person.image} alt={person.name} />
                <h3>{person.title}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder='title'
                    onChange={handleChange}
                />
                <input type="submit" value="Create Person"/>
            </form>
        {props.people ? loaded() : loading()}
        </section>
    )
}

export default Index