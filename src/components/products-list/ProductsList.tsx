import {useEffect, useState} from "react";
import {loadProducts} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";

export const ProductsList = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const allProducts = await loadProducts();
            setProducts(allProducts);
        }
        fetchData();
    }, []);

    return (
        <>
            {
                products.map((product) => (
                    <div key={product.id}>{product.title}</div>
                ))
            }
        </>
    );
};
