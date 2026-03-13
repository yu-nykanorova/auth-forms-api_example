import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    product: IProduct;
};

export const ProductItem: FC<ProductProps> = ({product}) => {
    return (
        <li className="py-6 bg-white shadow=sm rounded-md">
            <p className="px-6 py-2 text-[20px] text-right font-semibold bg-pink-100">ID: {product.id}</p>
            <div className="px-6">
                <div className="flex items-center justify-center">
                    <img className="max-w-50" src={product.thumbnail} alt={product.title}/>
                </div>
                <div>
                    <h2 className="mb-2 text-[26px]">{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p className="mt-2 text-[20px] font-semibold">Price: <span className="text-pink-800">{product.price}</span></p>
                </div>
            </div>
        </li>
    );
};
