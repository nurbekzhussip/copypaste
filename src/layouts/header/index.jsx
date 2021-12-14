import React from 'react'
import {Flex} from "@chakra-ui/layout";
import {Box, Heading, Spacer} from "@chakra-ui/react";


export const Header = () => {
    return <Flex bg={'#f5f5f5'} p='3'>
        <Box>
            <Heading size='md' color="#666">CopyPaste</Heading>
        </Box>
        <Spacer />
        <Box>
        </Box>
    </Flex>
}