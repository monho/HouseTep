// components/order/order.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setLoading, setItems } from "../../redux/actions";

import Header from "../header/header";
import Card from "./itemcard/card";
import Purchase from "./PurchaseArea/purchase";

const Warp = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

const HeaderComponents = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const ContentArea = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: height 3s; /* 3초 동안의 트랜지션 효과를 줌 로딩 시간 3초동안 로딩 텍스트를 화면 중간으로 출력하기 위해*/
  height: ${({ isLoading }) =>
    isLoading ? "100%" : "auto"}; /* isLoading 상태에 따라 높이를 조절 */

  p {
    margin: 0;
    text-align: center;
  }
`;
const PurchaseContainer = styled.div`
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;
function Order() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const items = useSelector((state) => state.items);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/items");
        const data = await response.json();
        dispatch(setItems(data));
        setTimeout(() => {
          setIsLoading(false); // 3초 후에 isLoading을 false로 변경
          dispatch(setLoading(false));
        }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // 에러 발생 시에도 isLoading을 false로 변경
        dispatch(setLoading(false));
      }
    };

    fetchData();

    return () => {};
  }, [dispatch]);

  return (
    <Warp>
      <HeaderComponents />
      <ContentArea isLoading={isLoading}>
        {loading ? (
          <p>목록을 불러오고 있습니다.</p>
        ) : (
          <>
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </>
        )}
      </ContentArea>
      <PurchaseContainer>
        <Purchase />
      </PurchaseContainer>
    </Warp>
  );
}

export default Order;
