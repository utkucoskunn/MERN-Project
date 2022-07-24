import React from 'react';
import {fetchProduct} from '../../api';
import {useQuery} from 'react-query';
import {useParams} from "react-router-dom"; /* Gelen parametreyi almak için!*/
import {Box, Text, Button} from '@chakra-ui/react';
import Moment from "moment";
import ImageGallery from 'react-image-gallery';

import {useBasket, items} from "../../contexts/BasketContext"


function ProductDetail() {
    const {product_id} = useParams();
    const {addToBasket, items}=useBasket();


    /* Backend e istek*/
    const {isLoading, isError, data} = useQuery(["product", product_id], () =>
        fetchProduct(product_id)
    );


    if (isLoading) {
        return (
            <div>Loading..</div>
        )
    }
    if (isError) {
        return (
            <div>Error..</div>
        )
    }

    const findBasketItem=items.find((item)=>item._id===product_id);
    const images = data.photos.map((url) => ({original: url}));


    return (
        <div>
            <Box margin="10">
                <ImageGallery items={images} showThumbnails={false}/>
            </Box>
            <Button
                colorScheme={findBasketItem ? "pink" : "green"}
                onClick={()=> addToBasket(data, findBasketItem)}
            >
                {findBasketItem ? "Remove to basket": "Add to basket"}
            </Button>
            <Text as="h2" fontSize="2xl">
                {data.title}
            </Text>
            <Text>
                {Moment(data.createdAt).format('DD/MM/YYYY')}
            </Text>
            <p>
                {data.description}
            </p>

        </div>
    )
}

export default ProductDetail;