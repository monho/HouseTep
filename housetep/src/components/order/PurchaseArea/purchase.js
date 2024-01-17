import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
    width: 100%;
    height: 170px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    justify-content: center;
`;

const Inner = styled.div`
    width: 301px;
    margin: 0px;
    text-align: right;
`;

const Toparea = styled.div``;
const Bottomrea = styled.div``;

const CommitBtn = styled.button`
    background-color: #c1c1c1;
    width: 100%;
    height: 48px;
    border: none;
    color: #fff;
    font-weight: bold;
    margin-top: 25px;
`;

function Purchase() {
    return (
        <Warp>
            <Inner>
                <Toparea>총 수량 : 0개</Toparea>
                <Bottomrea>총 가격 : 0원</Bottomrea>
                <CommitBtn>주문하기</CommitBtn>
            </Inner>
        </Warp>
    );
}
export default Purchase;
