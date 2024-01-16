import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
    width: 301px;
    height: 80px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    margin-bottom: 18px;
`;

function Card() {
    return <Warp></Warp>;
}
export default Card;
