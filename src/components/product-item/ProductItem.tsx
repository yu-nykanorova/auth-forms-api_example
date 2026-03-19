import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductProps = {
    product: IProduct;
};

export const ProductItem: FC<ProductProps> = ({product}) => {
    return (
        <li className="pb-6 grid grid-rows-[auto_1fr] bg-white shadow-sm rounded-md">
            <p className="px-6 py-2 text-[20px] text-right font-semibold bg-yellow-200">ID: {product.id}</p>
            <div className="h-full px-6 flex flex-col">
                <div className="w-full h-100 flex items-center justify-center">
                    <img className="w-full h-full object-cover" src={product.images[0]} alt={product.title}/>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <h2 className="mb-2 text-[26px] text-amber-600">
                        {product.title}
                    </h2>
                    <p>{product.description}</p>
                    <p>{product.slug}</p>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[20px]">
                                Category {product.category.id}: <span className="text-amber-600 font-semibold">{product.category.name}</span>
                            </p>
                        </div>
                        <img
                            src={product.category.image}
                            alt={product.category.name}
                            className="max-w-10"
                        />
                    </div>

                    <p className="mt-auto text-[20px] font-semibold">
                        Price: <span className="text-pink-800">{product.price}</span>
                    </p>
                </div>
            </div>
        </li>
    );
};
