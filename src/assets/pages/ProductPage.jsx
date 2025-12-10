import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data)
        })
    },[id])
    return(
        <><section>
        { 
            product !== null && <div><h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <ul>
                <li>{product.category}</li>
                <li>${product.price}</li>
            </ul>

            </div>
        }
            
                
            </section>
        </>
    )
}