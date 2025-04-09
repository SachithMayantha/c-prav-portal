import React, { useState } from "react";
import CertDB_Products from "../components/CertDB_Products";
import CertDB_ProductInfo from "../components/CertDB_ProductInfo";

const CertDB = () => {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBack = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            {!selectedProduct ? (
                <CertDB_Products onProductClick={handleProductClick} />
            ) : (
                <CertDB_ProductInfo product={selectedProduct} onBack={handleBack} />
            )}
        </div>
    );
};

export default CertDB;