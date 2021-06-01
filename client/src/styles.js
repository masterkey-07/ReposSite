import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}


`;

export const Container = styled.main`
  width: 100%;
  min-height: 93.2vh;
  background: linear-gradient(rgb(100, 100, 100), rgb(20, 20, 20));
  display: flex;
  justify-content: center;
  box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);

  form {
    width: 95%;
    border-radius: 18px;
    margin-top: 1.5%;
    padding: 2%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReposHeader = styled.header`
  background-color: rgb(60, 60, 60);

  h1 {
    color: white;
    padding: 2%;
  }
`;

export const SearchField = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background-color: rgb(250, 250, 250);
    width: 100%;
    font-size: 20px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    padding: 8px 8px 8px 12px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }

  input:focus,
  input:hover {
    box-shadow: inset 1px 4px 7px rgba(0, 0, 0, 0.25);
  }

  i {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: rgb(100, 100, 100);
    cursor: pointer;
  }
`;

export const TableField = styled.div`
  margin-top: 3%;
  flex-direction: column;
  display: flex;
  justify-content: center;

  h3 {
    color: white;
  }

  table {
    border-radius: 10px;
    width: 100%;
  }
`;

export const LeftHead = styled.th`
  border-radius: 10px 2px 2px 2px;
  color: white;
  background-color: rgb(40, 40, 40);
  text-align: left;
  padding: 5px;
`;

export const RightHead = styled.th`
  border-radius: 2px 10px 2px 2px;
  color: white;
  background-color: rgb(40, 40, 40);
  text-align: left;
  padding: 5px;
`;

export const ReposName = styled.td`
  text-align: left;
  padding: 5px;
  background-color: rgb(200, 200, 200);
  padding: 10px;
  border-radius: 2px;

  width: 30%;
  border: 0;
  cursor: pointer;
  font-size: 18px;

  :hover {
    background-color: rgb(150, 150, 150);
  }
`;

export const ReposPath = styled.td`
  text-align: left;
  padding: 5px;
  background-color: rgb(200, 200, 200);
  padding: 10px;
  border-radius: 2px;
  font-size: 15px;

  width: 70%;
  border-radius: 2px;
  cursor: pointer;

  :hover {
    background-color: rgb(150, 150, 150);
  }
`;
