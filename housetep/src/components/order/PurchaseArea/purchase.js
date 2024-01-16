import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
    width: 100%;
    height: 170px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

function Purchase() {
    return <Warp></Warp>;
}
export default Purchase;
