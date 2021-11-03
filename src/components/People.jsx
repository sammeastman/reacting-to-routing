import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(data => setPeople(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="row">
            {people.map(person => (
            <div className="col-6" key={person.id}>
            <div class="card">
                <div class="card-body">
                    <img src={person.movie_banner} alt="poster from movie" class="card-img-top" />
                    <h5 class="card-title">{person.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{person.gender}</h6>
                    <p class="card-text">{person.age}</p>
                    <Link to={`/people/${person.id}`} class="card-link">See More</Link>
                </div>
            </div>
        </div>
        ))}

        </div>

    )

}

export default People