import React from 'react'
import uuid from 'react-uuid'

import Result from './Result'

const Results = ({ results, openPopup }) => {
    return (
        <section className="results">
            {results.map(result => (
                <Result 
                    key={uuid()}
                    result={result} 
                    openPopup={openPopup}
                />
            ))}
        </section>
    )
}

export default Results
