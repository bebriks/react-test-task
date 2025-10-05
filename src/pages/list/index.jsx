import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import { Item } from "../../components/item"
import './index.css'
import { Loading } from "../../components/loading"

const List = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        
        getProducts()
            .then(data => {
                setProducts(data);
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [products]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;
    return(
        <div className="container__list">
            { (products && !loading) && products.map((el) =><Item key={el.id} {...el}/>) }
        </div>
    )
}

export { List }