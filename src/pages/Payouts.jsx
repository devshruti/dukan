import React, { useState } from 'react';
import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Select, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import help from "../Assets/Help.png"
import search from "../Assets/search.png"
import right from "../Assets/Chevron RightWhite.png"
import right1 from "../Assets/Chevron Right.png"
import sort from "../Assets/sort.png"
import download from "../Assets/download.png"
import round from "../Assets/EllipseGray.png"
import green from "../Assets/EllipseGreen.png"



const Payouts = () => {
    const [activeSection, setActiveSection] = useState('payouts');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    return (
        <Box
            width="96%"
            top="96px"
            left="256px"
            gap="32px"
            m={"16px auto"}
            color={"#1A181E"}
        >
            <Box>
                <Flex justify={"space-between"} m={"0 3%"}>
                    <Text fontSize={"20px"} fontWeight={500}>Overview</Text>
                    <Select w={"120px"} h={"26px"} fontSize={"13px"} color={"#4D4D4D"}>
                        <option value='default'>This Month</option>
                        <option value='filter'>Filter by date</option>
                    </Select>
                </Flex>
                <Flex justify={"space-evenly"} mt={4} w={"full"} borderRadius={4} >
                    <Box w={"30%"} borderRadius={6} bg={"#146EB4"} mb={"2.1%"}>
                        <Box p={4} bg={"#146EB4"} borderRadius={6} color={"#FFFFFF"}  >
                            <Flex m={"2%"}>
                                <Text fontSize={"13px"} fontWeight={400} lineHeight={"22px"}>Next Payout</Text>
                                <Image src={help} w={3} h={3} m={"1.5%"} />
                            </Flex>
                            <Flex m={"2%"} justify={"space-between"}>
                                <Text fontSize={"30px"} fontWeight={600} lineHeight={"34px"}>₹2,312.23</Text>
                                <Flex> <Text fontSize={"13px"} fontWeight={400} lineHeight={"22px"} textDecoration={"underline"}>23 orders  </Text>
                                    <Image src={right} w={3} h={3} mt={"8%"} />  </Flex></Flex>
                        </Box>
                        <Box color={"#FFFFFF"} borderRadius={6}>
                            <Flex p={"2.5% 5%"} justify={"space-between"} borderRadius={6} bg={"#0E4F82"}>
                                <Text fontSize={"11px"} fontWeight={600} lineHeight={"20px"}>Next payout date:</Text>
                                <Text fontSize={"11px"} fontWeight={600} lineHeight={"20px"}>Today, 04:00PM</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <Box w={"30%"} borderRadius={6} p={4} bg={"#FFFFFF"} mb={"5%"} >
                        <Flex m={"2%"}>
                            <Text fontSize={"13px"} fontWeight={400} lineHeight={"22px"} color={"#4D4D4D"} >Amount Pending</Text>
                            <Image src={help} w={3} h={3} m={"1.5%"} />
                        </Flex>
                        <Flex m={"2%"} justify={"space-between"}>
                            <Text fontSize={"30px"} fontWeight={600} lineHeight={"34px"}>₹92,312.20</Text>
                            <Flex>
                            <Text fontSize={"13px"} fontWeight={500} lineHeight={"22px"} color={"#146EB4"} textDecoration={"underline"} >13 orders</Text>
                            <Image src={right1} w={3} h={3} mt={"8%"} />
                       </Flex>
                        </Flex>

                    </Box>
                    <Box w={"30%"} borderRadius={6} p={4} bg={"#FFFFFF"} mb={"5%"} >
                        <Flex m={"2%"}>
                            <Text fontSize={"13px"} fontWeight={400} lineHeight={"22px"} color={"#4D4D4D"}>Amount Processed</Text>
                            <Image src={help} w={3} h={3} m={"1.5%"} />
                        </Flex>
                        <Flex m={"2%"} justify={"space-between"}>
                            <Text fontSize={"30px"} fontWeight={600} lineHeight={"34px"}>₹23,92,312.19</Text>
                            {/* <Text fontSize={"13px"} fontWeight={400} lineHeight={"22px"}>23 orders</Text> */}
                        </Flex>

                    </Box>
                </Flex>
            </Box>
            <Box w={"40%"} textAlign={"left"} m={"0 2%"}>
                <Text fontSize={"20px"} fontWeight={500} >Transactions | This Month</Text>
                <Box mt={"2%"}>
                    <Button
                        bg={activeSection === 'payouts' ? "#146EB4" : "#E6E6E6"}
                        color={activeSection === 'payouts' ? "#FFFFFF" : "#808080"}
                        fontSize={"14px"}
                        borderRadius={"40px"}
                        h={"30px"}
                        mr={"2%"}
                        onClick={() => handleSectionClick('payouts')}
                    >
                        Payouts (22)
                    </Button>
                    <Button
                        bg={activeSection === 'refunds' ? "#146EB4" : "#E6E6E6"}
                        color={activeSection === 'refunds' ? "#FFFFFF" : "#808080"}
                        fontSize={"14px"}
                        borderRadius={"40px"}
                        h={"30px"}
                        onClick={() => handleSectionClick('refunds')}
                    >
                        Refunds (2)
                    </Button>

                </Box>
            </Box>
            <Box bg={"#FFFFFF"} m={"2%"} id='payouts' style={{ display: activeSection === 'payouts' ? 'block' : 'none' }}>
                <Flex justify={"space-between"}>
                    <InputGroup w={"260px"} m={"1%"}>
                        <InputLeftElement pointerEvents="none">
                            <Image src={search} boxSize="12px" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            bg="#FFFFFF"
                            fontSize="12px"
                        />
                    </InputGroup>
                    <Flex m={"1%"}>
                        <Box borderRadius={4} border={"2px solid #D9D9D9"} m={"2%"} h={"36px"}>
                            <Flex padding={"4px 8px 6px 12px"}>
                            <Text >Sort </Text>
                            <Image src={sort} w={3} h={3} m={"6px 8px"} />
                        </Flex></Box>
                        <Box borderRadius={4} border={"2px solid #D9D9D9"} m={"2%"} h={"36px"}>
                             <Image src={download} w={5} h={5} m={"6px 8px"} /> </Box>

                    </Flex>
                </Flex>
                <Box>
                    <Table variant="simple" m={"auto"} w={"97%"}>
                        <Thead bg={"#F2F2F2"}>
                            <Tr>
                                <Th>Order ID</Th>
                                <Th>Status</Th>
                                <Th>Transaction ID</Th>
                                <Th>Order Amount</Th>
                                <Th>Transaction Fee</Th>
                                <Th>Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody color={"#1A181E"} fontSize={"14px"} >
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={round} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Processing</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                            <Tr >
                                <Td></Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>₹10,125.00</Td>
                                <Td>₹1,125.00</Td>
                                <Td>₹9,312</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Box>
            <Box bg={"#FFFFFF"} m={"2%"} id='refunds' style={{ display: activeSection === 'refunds' ? 'block' : 'none' }}>
                <Flex justify={"space-between"}>
                    <InputGroup w={"260px"} m={"1%"}>
                        <InputLeftElement pointerEvents="none">
                            <Image src={search} boxSize="12px" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            bg="#FFFFFF"
                            placeholder='Order ID or transaction ID'
                            fontSize="12px"
                        />
                    </InputGroup>
                    <Flex m={"1%"}>
                        <Box borderRadius={4} border={"2px solid #D9D9D9"} m={"2%"} h={"36px"}>
                            <Flex padding={"4px 8px 6px 12px"}>
                            <Text >Sort </Text>
                            <Image src={sort} w={3} h={3} m={"6px 8px"} />
                        </Flex></Box>
                        <Box borderRadius={4} border={"2px solid #D9D9D9"} m={"2%"} h={"36px"}>
                             <Image src={download} w={5} h={5} m={"6px 8px"} /> </Box>

                    </Flex>
                </Flex>
                <Box>
                    <Table variant="simple" m={"auto"} p={4} w={"97%"}>
                        <Thead bg={"#F2F2F2"}>
                            <Tr>
                                <Th>Order ID</Th>
                                <Th>Status</Th>
                                <Th>Transaction ID</Th>
                                <Th>Refund date</Th>
                                <Th>Order Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody color={"#1A181E"} fontSize={"14px"} >
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={round} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Processing</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>Today, 08:45 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>Yesterday, 3:00 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>12 Jul 2023, 03:00 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>12 Jul 2023, 03:00 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>12 Jul 2023, 03:00 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                            <Tr >
                                <Td color={"#146EB4"}>#281209</Td>
                                <Td><Flex><Image src={green} mt={"4.5%"} mr={"2%"} w={2} h={2}/> <Text>Successful</Text></Flex> </Td>
                                <Td>131634495747</Td>
                                <Td>12 Jul 2023, 03:00 PM</Td>
                                <Td>₹1,125.00</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </Box>
    );
};

export default Payouts;
