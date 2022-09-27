import React from 'react'
import {useState, useEffect} from 'react'

const Projects = (props) => {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        // fetch data from URL/projects
        const response = await fetch(props.URL+"projects")
        // turn response into JSON object
        const data = await response.json()
        // set 'projects' state to 'data'
        setProjects(data)
    }

    useEffect(() => getProjectsData())

    const loaded = () => { 
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name}/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }
  return (
    projects ? loaded() : <h1> Loading... </h1>
  )
}

export default Projects