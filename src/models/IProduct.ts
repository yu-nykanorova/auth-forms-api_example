export interface IProductsObjModel {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    sku: string;
    weight: number;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    returnPolicy: string;
    minimumOrderQuantity: number;
    thumbnail: string;
    tags: string[];
    images: string[];
    dimensions: IDimension;
    reviews: IReview[];
    meta: IMeta;
}

export interface IDimension {
    width: number;
    height: number;
    depth: number;
}

export interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}