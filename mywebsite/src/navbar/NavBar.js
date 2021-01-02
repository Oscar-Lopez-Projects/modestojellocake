import React from 'react';
import mainLogo from '../components/MjcLogo.png'
import cartIcon from '../components/cartlogo.png'
import navOne from '../components/nav1.png'
import navTwo from '../components/nav2.png'
import LoginLogo from '../components/log.png'
import navThree from '../components/nav3.png'
import styled from 'styled-components';

const NavBarComponent = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    display:flex;
    align-items:center;
    justify-content: space-around;
    background: rgba(130, 168, 238, 0.26);
    border:1px solid black;
`;
const NavImg = styled.img`
    width: 120px
`;
const NavLinks = styled.p`
    font-size:20px;
    font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`;
const CartWords = styled.p`
    font-size:25px;
    padding:10px;
    border: 2px solid blue;
`;
const NavBar = ()=>{
    return(
        <NavBarComponent>
            <div>
                 <img width="140px"src={mainLogo} />
            </div>
                
            <div>
                <NavLinks>Menu </NavLinks>
            </div>
            <div>
               <NavLinks>About Us</NavLinks>
            </div>
            <div>
               <NavLinks>Contact Us</NavLinks>
            </div>

            <div>
                <img width="60px" src={LoginLogo}/>
            </div>
        </NavBarComponent>
    )
}
export default NavBar