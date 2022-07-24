import React from "react";
import {Box, Image, Button, Badge} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Moment from "moment";

import {useBasket} from "../../contexts/BasketContext";

function Card({item}) {

    const {addToBasket, items} = useBasket();

    const findBasketItem = items.find((basket_item) => basket_item._id === item._id);


    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p="3">

            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} alt="product" loading="lazy"/>

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                        <Box color='gray.500'
                             fontWeight='semibold'
                             letterSpacing='wide'
                             fontSize='xs'
                             textTransform='uppercase'
                             ml='2'>
                            {Moment(item.createdAt).format('DD/MM/YYYY')}
                        </Box>
                    </Box>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {item.title}
                </Box>

                <Box>
                    {item.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / tl
                    </Box>
                </Box>
            </Link>

            <Button colorScheme={findBasketItem ? "pink" : "green"} variant="solid" size='sm'
                    onClick={() => addToBasket(item, findBasketItem)}
            >
                {
                    findBasketItem ? "Remove from basket" : "Add to basket"
                }
            </Button>
        </Box>
    )
}

export default Card;
