import { useParams } from "react-router-dom"

export default function ProductPage() {
    const { id } = useParams()
    return(
        <>
        <section>
            <h1>{ProductPage.title}</h1>
            </section>
        
        </>
    )
}