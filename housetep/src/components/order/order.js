import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setLoading } from '../../redux/actions';

import Header from '../header/header';
import Card from './itemcard/card';

const Warp = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const HeaderComponents = styled(Header)`
    positton: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
`;

const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    p {
        margin: 0;
        text-align: center;
    }
`;

function Order() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoading(false));
        }, 3000); //3초간 상품 목록 불러오는 기능을 구현하기 위한 타이머 삽입(시간은 임의로 넣은것..)

        return () => clearTimeout(timer);
    }, [dispatch]);

    return (
        <Warp>
            <HeaderComponents />
            <ContentArea>
                {loading ? (
                    <p>목록을 불러오고 있습니다.</p>
                ) : (
                    <>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </>
                )}
            </ContentArea>
        </Warp>
    );
}
export default Order;
