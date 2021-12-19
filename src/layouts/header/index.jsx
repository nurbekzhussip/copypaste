import React from 'react'
import {Link} from 'react-location'
import {Box, Heading} from "@chakra-ui/react";


export const Header = () => {
    return <header>
        <Box>
            <Heading size='md' color="#666"><Link to={'/'}>CopyPaste</Link></Heading>
        </Box>
    </header>
}