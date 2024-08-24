// import React from 'react';
import {AppBar, Toolbar, Box, styled} from '@mui/material'
const StyledHeader=styled(AppBar)`
    background:#2874f0;

`;
const Component=styled(Box)`
margin-left:12%;
`
const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  return (
    <StyledHeader>
        <Toolbar>
            <Component>
                <img src={logoURL} alt="logo" style={{ width:75}}/>
                <Box>
                    <p>Explore</p>
                </Box>
            </Component>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header