import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCount } from '../../../redux/actions';

const Warp = styled.div`
    width: 301px;
    height: 80px;
    background: ${({ count }) => (count > 0 ? 'rgba(247,90,47,0.1)' : '#fff')}; // 카운터가 0 이상이면 색을 변경
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
    background-color: transparent; /* 수정된 부분 */
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
    padding: 5px;
    color: #fff;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
`;
function Card({ item }) {
    const dispatch = useDispatch();

    const count =
        useSelector((state) => {
            const targetItem = state.items.find((i) => i.id === item.id);
            return targetItem ? targetItem.count : 0;
        }) || 0;

    const handleIncrement = () => {
        if (count < 999) {
            dispatch(setCount(item.id, count + 1));
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            dispatch(setCount(item.id, count - 1));
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
                    <ItemPrice>{item.price}원</ItemPrice>
                </RbottomArea>
            </RightInner>
        </Warp>
    );
}
export default Card;
