import React from 'react';
import styled from 'styled-components';
import headerLogo from '../../assets/images/header_logo.png';

const Warp = styled.div`
    width: 100%;
    height: 57px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    position: fixed;
`;

const HeaderImg = styled.img`
    width: 94px;
    height: 32px;
    margin-left: 12px;
`;

function Header() {
    return (
        <Warp>
            <HeaderImg src={headerLogo} alt="헤더로고 이미지" />
        </Warp>
    );
}
export default Header;
