import React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index.js'
import Show from '../pages/Show.js'

const Main = (props) => {
    const [people, setPeople] = useState(null)

    const URL = "http://localhost:4000/people"

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        setPeople(data)
    }

    const createPeople = async (person) => {
        // by default fetch() GETs, we change to a POST route in order to CREATE
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(person)
        })
        // updateList of people
        getPeople()
    }

    useEffect(() => {
        getPeople()
    }, [])


    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index 
                    // passing current 'people' state and createPeople method as props
                        people={people}
                        create={createPeople}
                    />
                </Route>
                <Route
                    path="/people/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    )
}

export default Main