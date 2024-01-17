import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../../../redux/actions';

const Warp = styled.div`
    width: 301px;
    height: 80px;
    background: ${({ count }) => (count > 0 ? 'rgba(247,90,47,0.1)' : '#fff')};
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    margin-bottom: 18px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LeftInner = styled.div`
    width: 72px;
    height: 62px;
    margin: 0px;
    background-color: #d9d9d9;
`;

const RightInner = styled.div`
    width: 100%;
    height: 62px;
    margin: 0 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const RtopArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RbottomArea = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    flex-direction: row;
    gap: 55px;
`;

const ItemName = styled.div`
    margin: 0px;
`;

const ItemCount = styled.div`
    margin: 0px;
    display: flex;
`;

const CountButton = styled.a`
    background-color: transparent;
    color: #000;
    border: none;
    font-size: 25px;
    margin: 0 6px;
    line-height: 1;
    cursor: pointer;
`;

const ItemPrice = styled.div`
    margin: 0px;
`;

const EventTag = styled.div`
    background-color: #f75a2f;
    border-radius: 10px;
    width: 53px;
    height: 23px;
    margin: 0 0 0 10px;
    color: #fff;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
`;

const calculateTotalQuantity = (items) => {
    return items.reduce((total, currentItem) => {
        // 각 아이템의 수량이 0 이상인 경우에만 합산
        return total + (currentItem.count || 0);
    }, 0);
};

const calculateTotalPrice = (items) => {
    return items.reduce((total, currentItem) => {
        // 각 아이템의 수량이 0 이상인 경우에만 가격 합산
        return total + (currentItem.count || 0) * currentItem.price;
    }, 0);
};

function Card({ item, updateTotalValues }) {
    const dispatch = useDispatch();
    const formatPrice = (price) => {
        return price.toLocaleString();
    };
    const state = useSelector((state) => state); // Redux state 가져오기
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const count =
        useSelector((state) => {
            const targetItem = state.items.find((i) => i.id === item.id);
            return targetItem ? targetItem.count : 0;
        }) || 0;

    const handleIncrement = () => {
        if (count < 999) {
            dispatch(setCount(item.id, count + 1));
            logItemDetails();
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            dispatch(setCount(item.id, count - 1));
            logItemDetails();
        }
    };

    useEffect(() => {
        const newTotalQuantity = calculateTotalQuantity(state.items);
        const newTotalPrice = calculateTotalPrice(state.items);

        // console.log(`총 수량: ${newTotalQuantity}`);
        // console.log(`총 가격: ${formatPrice(newTotalPrice)}`);

        setTotalQuantity(newTotalQuantity);
        setTotalPrice(newTotalPrice);
    }, [state.items]);

    const logItemDetails = () => {
        if (count > 0) {
            const itemCount = count + 1;
            const totalPrice = item.price * itemCount;
            console.log(`아이템: ${item.name}, 수량: ${itemCount}, 가격: ${formatPrice(totalPrice)}원`);
        }
    };

    return (
        <Warp count={count}>
            <LeftInner />
            <RightInner>
                <RtopArea>
                    <ItemName>{item.name}</ItemName>
                    {item.event && <EventTag>이벤트</EventTag>}
                </RtopArea>
                <RbottomArea>
                    <ItemCount>
                        <CountButton onClick={handleDecrement}>-</CountButton>
                        {count}
                        <CountButton onClick={handleIncrement}>+</CountButton>
                    </ItemCount>
                    <ItemPrice>{formatPrice(item.price)}원</ItemPrice>
                </RbottomArea>
            </RightInner>
        </Warp>
    );
}

export default Card;
