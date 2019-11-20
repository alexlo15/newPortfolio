import React, { Component } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, MenuOptionGroup, MenuItemOption, } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

class Home extends Component {

    render() {
        return (
            <>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    <Box w="100%" h="10" color="red" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                    <Box w="100%" h="10" bg="blue.500" />
                </Grid>
            </>
        )
    }

};

export default Home;
