import React from 'react'

const Movie = (props) => {
    return (
        <tr>
            <th scope="row">{props.title}</th>
            <td>{props.duration}</td>
            <td>{props.rating}</td>
            <td>{props.genre}</td>
            <td>{props.awards}</td>
        </tr>
    )
}

export default Movie