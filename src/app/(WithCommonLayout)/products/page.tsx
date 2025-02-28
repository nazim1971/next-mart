import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer/NMContainer";


const AllProductsPage = () => {
    return (
        <NMContainer>
            <ProductBanner title="All Products" path="Home - products" />
        </NMContainer>
    );
};

export default AllProductsPage;