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

export const Cart = styled("div")`
  position: absolute;
  top: 0px;
  height: auto;
  right: 0px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  width: 486px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

  .header {
    background: red;
    height: 80px;
    width: 100%; 
  }

  .products {
    background: pink;
    height:auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .footer {
    background: #e11236;
    height: 180px;
    width: 100%;
  }
    
  .container {
    overflow-y: scroll;
  }

 
  .scroll {
  /*   padding-top: 170px;
    padding-bottom: 70px; */
  }


  .item {
    width: 379px;
    height: 95px;
    border-radius: 8px;
    background: #fff;
    margin-bottom: 28px;
  }
`;
