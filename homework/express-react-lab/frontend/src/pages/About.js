import React from 'react'
import { useState, useEffect } from "react"

const About = (props) => {
    // create state to hold about data; initialized to null
    const [about, setAbout] = useState(null)

    // create function to make api call
    const getAboutData = async() => {
        // make api call from /about page; concatenate strings to get proper URL
        const response = await fetch(props.URL + "about")
        // turn response data to JSON object
        const data = await response.json()
        // set the about state to the data
        setAbout(data)
    }

    // make an initial call for the data inside a useEffect so it only happens once on component load
    useEffect(() => getAboutData())

    const loaded = () => {
        return (
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    }

    // if data arrives return the result of loaded, if not show 'Loading...'
    return (
        about ? loaded() : <h1>Loading...</h1>
  )
}

export default About