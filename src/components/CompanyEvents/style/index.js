import styled from "styled-components";

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
  background: #f5f5f5;
`;

export const Event = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 25px;
  margin-bottom: 15px;
`;

export const EventInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;

  color: #000000;
`;

export const EventDate = styled.div`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 10px;
  color: #b2b2b2;
`;
