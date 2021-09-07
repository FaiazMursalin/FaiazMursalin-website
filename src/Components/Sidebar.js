import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation';

function Sidebar(){
    return(
        <SidebarStyled>
            <Navigation />

        </SidebarStyled>
    )
}
const SidebarStyled = styled.div`

    width: 20%;
    position: fixed;
    height: 100%;
    background-color: var(--sidebar-dark-color);

`;


export default Sidebar;
