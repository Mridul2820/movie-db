import React from 'react'
import uuid from 'react-uuid'

const PopUp = ({ selected, closePopup }) => {
    return (
        <section className="popup">
            <div className="content">
                <h2 className="title">
                    {selected.Title} ({selected.Year})
                </h2>
                <button className="close" onClick={closePopup}>X</button>
                <div className="movie">
                    <div className="details">
                        <p>Type : {selected.Type}</p>
                        <p>Genre : {selected.Genre}</p>
                        <p>Contry : {selected.Country}</p>
                        <p>Cast : {selected.Actors}</p>
                        <p>Release Date : {selected.Released}</p>
                        <p>Language : {selected.Language}</p>
                        {(selected.totalSeasons) 
                            ? <p>Seasons : {selected.totalSeasons}</p> 
                            : '' 
                        }

                        <p>Total Time : {selected.Runtime}</p>

                        <div className="rating">
                            <p>Rating :</p>
                            <ul>
                                <li>IMDb : {selected.imdbRating}</li> 
                                {selected.Ratings.map(rating => (
                                    <li key={uuid()} >
                                        {rating.Source} : {rating.Value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p>Plot : {selected.Plot}</p>
                    </div>
                    <div className="poster">
                        <img src={selected.Poster} alt={selected.Title} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopUp
