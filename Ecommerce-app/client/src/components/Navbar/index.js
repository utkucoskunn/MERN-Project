import styles from "./styles.module.css"

import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Button} from '@chakra-ui/react';
import {useAuth} from '../../contexts/AuthContext';
import {useBasket} from '../../contexts/BasketContext';

function Navbar() {
    const {loggedIn} = useAuth();
    const {items} = useBasket();
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Link to="/">Ecommerce</Link>
                    </div>

                    <ul className={styles.menu}>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/">Utku</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.right}>
                    {
                        !loggedIn && (
                            <>
                                <Link to="/signin">
                                    <Button colorScheme='teal' size='sm'>
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button colorScheme='teal' size='sm'>
                                        Register
                                    </Button>
                                </Link>
                            </>
                        )}
                    {
                        loggedIn &&
                        <>
                            {
                                items.length > 0 && (
                                    <Link to="/basket">
                                        <Button colorScheme="pink" variant="outline">
                                            Basket ({items.length})
                                        </Button>
                                    </Link>
                                )
                            }

                            <Link to="/profile">
                                <Button size='sm'>
                                    Profile
                                </Button>
                            </Link>
                        </>
                    }
                </div>
            </nav>
            < Outlet/>
        </div>
    )
}

export default Navbar;
