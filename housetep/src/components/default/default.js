import React from 'react';
import styled from 'styled-components';
import mainLogo from '../../assets/images/main_logo.png';
import { Link } from 'react-router-dom';

const Warp = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const OrderrButton = styled(Link)`
    width: 172px;
    height: 88px;
    border-radius: 20px;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 37px;
`;

function Default() {
    return (
        <Warp>
            <img src={mainLogo} alt="메인로고 이미지" />
            <OrderrButton to="/order">주문하러 가기</OrderrButton>
        </Warp>
    );
}

export default Default;
