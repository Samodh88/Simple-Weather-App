import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Weather App</h1>
        </HeaderContainer>
    );
}

export default Header;
