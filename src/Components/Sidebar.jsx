// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import img from "../Assets/Image.png"
import chevron from "../Assets/Chevron Down.png"
import home from "../Assets/Vector.png"
import order from "../Assets/orders.png"
import Appearance from "../Assets/appearance.png"
import product from "../Assets/Product.png"
import Discounts from "../Assets/discount.png"
import Audience from "../Assets/audience.png"
import Payouts from "../Assets/Payouts.png"
import marketing from "../Assets/MArketing.png"
import delivery from "../Assets/Delivery.png"
import Plugins from "../Assets/plugins.png"
import analytic from "../Assets/Analytics.png"
import frame from "../Assets/Frame 1113.png"

const Sidebar = () => {
    const location = useLocation();
    const isActive = (pathname) => location.pathname === pathname;

    return (
        <Box
            w="200px"
            h="100vh"
            bg="#1E2640"
            color="white"
            p="4"
            position="fixed"
            left="0"
            top="0"
        >
            <Flex >
                <Image src={img} w={"39px"} h={"39px"} />
                <Box marginLeft={2}>
                    <Text
                        fontSize="16px"
                        fontWeight="500"
                        lineHeight="22px"
                        letterSpacing="0em"
                        textAlign="left"
                        color="#FFFFFF"
                    >Nishyan</Text>
                    <Link>
                        <Text
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight={"16px"}
                        >Visit store</Text></Link>
                </Box>
                <Image src={chevron} w={"18px"} h={"14px"} top={3} left={8} position={"relative"} />
            </Flex>
            <Box mt={8} h={"82%"}>
                <Link to="/home">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/home') ? 'gray.700' : 'transparent'} // Highlight active link
                    >
                        <Image src={home} w={4} h={4} />
                        <span>Home</span>
                    </Flex>
                </Link>
                <Link to="/orders">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        backgroundColor={isActive('/orders') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={order} w={4} h={4} />
                        <span>Orders</span>
                    </Flex>
                </Link>
                <Link to="/products">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/products') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={product} w={4} h={4} />
                        <span>Products</span>
                    </Flex>
                </Link>
                <Link to="/delivery">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/delivery') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={delivery} w={4} h={4} />
                        <span>Delivery</span>
                    </Flex>
                </Link>
                <Link to="/marketing">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/marketing') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={marketing} w={4} h={4} />
                        <span>Marketing</span>
                    </Flex>
                </Link>
                <Link to="/analytics">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/analytics') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={analytic} w={4} h={4} />
                        <span>Analytics</span>
                    </Flex>
                </Link>
                <Link to="/payouts">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/payouts') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={Payouts} w={4} h={4} />
                        <span>Payouts</span>
                    </Flex>
                </Link>
                <Link to="/discounts">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/discounts') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={Discounts} w={4} h={4} />
                        <span>Discounts</span>
                    </Flex>
                </Link>
                <Link to="/audience">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/audience') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={Audience} w={4} h={4} />
                        <span>Audience</span>
                    </Flex>
                </Link>
                <Link to="/appearance">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/appearance') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={Appearance} w={4} h={4} />
                        <span>Appearance</span>
                    </Flex>
                </Link>
                <Link to="/plugins">
                    <Flex
                        as="div"
                        align="center"
                        justifyContent="flex-start"
                        w="full"
                        fontSize="14px"
                        padding="8px 16px"
                        h="34px"
                        gap="12px"
                        borderRadius={4}
                        bg={isActive('/plugins') ? 'gray.700' : 'transparent'}
                    >
                        <Image src={Plugins} w={4} h={4} />
                        <span>Plugins</span>
                    </Flex>
                </Link>
            </Box>
            <Flex
                as="div"
                align="center"
                justifyContent="flex-start"
                padding="18px 0px"
                w="full"
                fontSize="14px"
                h="44px"
                bg={"gray.700"}
                opacity={"80%"}
                borderRadius={4}
            >
                <Flex
                    as="div"
                    align="center"
                    justifyContent="flex-start"
                    w="160px"
                    margin={"-6px"}
                    fontSize="14px"
                    padding="8px 16px 8px 16px"
                    h="34px"
                    gap="10px">
                    <Image src={frame} w={8} h={8} />
                    <Box marginLeft={1}>
                    <Text
                        fontSize="10px"
                        fontWeight="400"
                        lineHeight="16px"
                        letterSpacing="0em"
                        textAlign="left"
                        color="#FFFFFF"
                    >Available credits</Text>
                    <Link>
                        <Text
                            fontWeight="500"
                            fontSize="15px"
                            lineHeight={"15px"}
                            textAlign={"left"}
                        >222.10</Text></Link>
                </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Sidebar;
