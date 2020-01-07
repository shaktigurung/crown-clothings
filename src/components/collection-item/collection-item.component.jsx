import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';

import {CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddToCartButton} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => { 
    const { name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddToCartButton onClick={() => addItem(item)} inverted > Add to cart </AddToCartButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);