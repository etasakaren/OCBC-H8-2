import {useParams} from 'react-router-dom'

function Contact() {
    let params = useParams()
    return (
        <>
            <h1>Contact Page</h1>
            <p>Hi, I'm {params.name}</p>
        </>
    )
}
export default Contact