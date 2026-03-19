import {useEffect, useState} from "react";
import {loadProducts} from "../../services/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import {ProductItem} from "../product-item/ProductItem.tsx";

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
        <ul className="grid grid-cols-2 gap-4">
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </ul>
    );
};
