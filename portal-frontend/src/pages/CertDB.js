import React, { useState } from "react";
import CertDBProducts from "../components/CertDBProducts";
import CertDBProductInfo from "../components/CertDBProductInfo";

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
        <CertDBProducts onProductClick={handleProductClick} />
      ) : (
        <CertDBProductInfo product={selectedProduct} onBack={handleBack} />
      )}
    </div>
  );
};

export default CertDB;
