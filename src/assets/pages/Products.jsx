import { useEffect, useState } from "react"
import axios from "axios"

export default function Products() {
const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(" https://fakestoreapi.com/products") .then((resp) => {
            setProducts(resp.data)
            console.log(resp)
        })
    },[])
    return (
        <section>
            <h3>Products</h3>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>{product.title}
                        <p>{product.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}