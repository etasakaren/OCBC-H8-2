import React, { useEffect, useState } from 'react';

function PersonQuote(props) {

    const [quote, setQuote] = useState(props.quote) //stateless

    useEffect(() => {
        setQuote(props.quote)
    }, [props.quote])
    
    return (
        <>
            <blockquote>
                {quote}
            </blockquote>
        </>
    )
}

export default PersonQuote