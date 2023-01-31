import styled from "styled-components";

export const Nav = styled("nav")`
  display: flex;
  justify-content: space-between;
  height: 101px;
  align-items: center;
  padding-right: 65px;
  padding-left: 65px;
  background-color: #0f52ba;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Logo = styled("div")`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: center;
`;

export const H3 = styled("h3")`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: #fff;
`;

export const H4 = styled("h4")`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-left: 10px;
  color: #fff;
`;

export const Button = styled("button")`
  height: 45px;
  width: 90px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  background-color: #fff;
`;

export const Img = styled("img")``;

export const Span = styled("span")`
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 18px;
margin-left: 16px;
color: #000;
}
`;
