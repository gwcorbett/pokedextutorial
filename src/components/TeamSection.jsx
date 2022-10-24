import React, {useEffect, useState} from 'react'
import axios from 'axios'

const TeamSection = ({team}) =>{
    const [teamDetails, setTeamDetails] = useState([])

    console.log(teamDetails)

    useEffect(() =>{
        // let newDetails = []
    //     team
    //     .forEach((id) =>{
    //         axios
    //         .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //         .then((res) =>{
    //             newDetails.push(res.data)
    //         })
    //     })
    //     .finally(() =>{
    //         setTeamDetails(newDetails)
    //     })
    // },[team])
    let newDetails = team.map

    return (
        <section className='team-section'>
            <h2>My Team</h2>
            <div className='team-container'>
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
                <h3>Hello</h3>
            </div>
        </section>
    )
    
}

export default TeamSection