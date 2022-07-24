import React from "react";
import Card_3 from '../../components/Card/Card_3';
import Navbar from "../../components/Navbar/Navbar";

import {Grid, Box, Flex, Button} from '@chakra-ui/react';
import {useInfiniteQuery} from 'react-query';
import {fetchProductList} from "../../api";

function Products() {
    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage
    } = useInfiniteQuery(
        'products',
        fetchProductList,
        {
            getNextPageParam: (lastGroup, allGroups) => {
                const morePageExist = lastGroup?.length === 12;
                if (!morePageExist) {
                    return;
                }
                return allGroups.length + 1;
            }
        }
    );

    if (status === "loading") return 'Loading...'

    if (status === "error") return 'An error has occurred: ' + Error.message
    return (
        <div>
            <Navbar/>
            <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item) => (
                                    <Box w="100%" key={item._id}>
                                        <Card_3 item={item}/>
                                    </Box>
                                ))
                            }
                        </React.Fragment>
                    ))
                }
            </Grid>
            <Flex mt="10" justifyContent="center">
                <Button
                    onClick={() => fetchNextPage()}
                    isLoading={isFetchingNextPage}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </Button>

                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </Flex>
        </div>
    )
}

export default Products;