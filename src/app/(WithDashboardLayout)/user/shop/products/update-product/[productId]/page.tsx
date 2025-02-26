import UpdateProductsForm from '@/components/modules/shop/product/UpdateProductForm';
import { getSingleProduct } from '@/services/Product';
import React from 'react';

const UpdateProductPage = async({params}: {params: Promise<{productId: string}>}) => {


    const {productId} = await params;

    const {data: product} = await getSingleProduct(productId)
    console.log(product);
    return (
        <div>
         <UpdateProductsForm product={product} />
        </div>
    );
};

export default UpdateProductPage;