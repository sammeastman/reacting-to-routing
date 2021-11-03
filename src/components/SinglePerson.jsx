import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePerson = () => {
    const [person, setPerson] = useState({});
    const { personid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/v1/people/${personid}`)
        .then(res => res.json())
        .then(data => setPerson(data))

    }, [personid])

    return (
        <div className="col-6" key={person.id}>
            <div class="card">
                <div class="card-body">
                    <img src={person.movie_banner} alt="poster from movie" class="card-img-top" />
                    <h5 class="card-title">{person.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{person.gender}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">{person.hair_color}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">{person.eye_color}</h6>
                    <p class="card-text">{person.age}</p>
                    <Link to={`/people/${person.id}`} class="card-link">See More</Link>
                </div>
            </div>
        </div>

    )

}

export default SinglePerson;