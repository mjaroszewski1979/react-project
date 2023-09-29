import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();
    return (
        <>
        <h2>Product Details</h2>
        <p>{params.productId}</p>
        </>
    )
};

export default ProductDetailPage;