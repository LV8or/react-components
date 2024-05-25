import React from 'react';

const Card = React.memo(({ product }) => {
    return (
        <div className="product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
        </div>
    );
});

export default Card;