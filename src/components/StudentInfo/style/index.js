import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: auto;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ffd9d9;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: capitalize;

  color: #000000;
`;

export const InfoCardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 100px;
  box-sizing: border-box;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 20px;
`;

export const InfoLabel = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-transform: capitalize;
  color: #939393;
  padding-right: 20px;
`;

export const InfoText = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: #000000;
`;
