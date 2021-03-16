import React from 'react'
import uuid from 'react-uuid'

import Result from './Result'

const Results = ({ results }) => {
    return (
        <section className="results">
            {results.map(result => (
                <Result 
                    key={uuid()}
                    result={result} 
                />
            ))}
        </section>
    )
}

export default Results
