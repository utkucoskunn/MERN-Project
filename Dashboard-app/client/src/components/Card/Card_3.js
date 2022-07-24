import React from "react";
import {Box, Image, Button, Badge} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import Moment from "moment";



function Card_3({item}) {

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

            <Button colorScheme="pink"  variant="solid" size='sm'>

            </Button>
        </Box>
    )
}

export default Card_3;