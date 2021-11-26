import { useEffect } from "react"
export default function Header(props) {
    useEffect(() => {
        props.example(`I'm a child component`)
    }, [])
    return (
        <h3>{props.title}</h3>
    )
}