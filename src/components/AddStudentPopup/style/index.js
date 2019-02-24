import styled from "styled-components";

export const PopupContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ffd9d9;
`;

export const PopupText = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #2d2d2d;
`;
export const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const PopupForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const PopupSubmitBtnContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
