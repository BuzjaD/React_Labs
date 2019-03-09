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
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ffd9d9;
  flex-shrink: 0;
`;

export const InfoCardHeaderText = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #000000;
`;

export const InfoCardHeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 225px;
  height: 25px;
`;

export const InfoCardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 20px;
  &:last-child {
    padding-bottom: 0;
  }
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

export const MainInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  justify-content: space-between;
  border-bottom: 1px solid #ffd9d9;
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 40px;
  color: #000000;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
`;
export const StudentPhoto = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  color: #000;
`;

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const EventsHeader = styled.div`
  display: flex;
  padding: 20px 0;
  width: 100%;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  text-transform: capitalize;
  color: #000000;
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
  width: calc(100% - 100px);
  margin: 0 50px;
  margin-bottom: 30px;
  background: #999999;
`;
