import React from 'react';
import { Box, Flex, Text, Input, InputGroup, InputLeftElement, Button, Grid, Image } from '@chakra-ui/react';
import help from "../Assets/Help.png"
import search from "../Assets/search.png"
import menu1 from "../Assets/Menu1.png"
import menu from "../Assets/Menu.png"

const DashboardHeader = () => {
    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            align="center"
            height="60px"
            padding={"8px 36px 12px 34px"}
            borderBottom="2px solid #D9D9D9"
            color={"#4D4D4D"}
            width={"full"}
            gap={"10px"}
            marginRight={"-8px"}
            bg={"#ffffff"}
        >
            {/* Help Box */}
            <Box display="flex" h={"40px"} alignItems="center" justifyContent="center">
                <Flex alignItems="center">
                    <Image src={help} w={3} h={3} />
                    <Text ml="1" fontSize={"11px"}>How it works</Text>
                </Flex>
            </Box>

            {/* Search Box */}
            <Box display="flex" h={"40px"} alignItems="center" justifyContent="center" >
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Image src={search} boxSize="16px" />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Search features, tutorials, etc."
                        bg="#F2F2F2"
                        fontSize="12px"
                    />
                </InputGroup>
            </Box>

            {/* Description Box */}
            <Box display="flex" h={"40px"} alignItems="center" justifyContent="end" mr={"6%"}>
                <Flex gap={"4px"}
                    justifyContent="flex-end"
                    // border={"2px solid gray"}
                    w="92px">
                    <Image src={menu1} w={8} h={8} />
                    <Image src={menu} w={8} h={8} />
                </Flex>
            </Box>
        </Grid>
    );
};

export default DashboardHeader;
