import styled from "styled-components";

export const Container = styled("div")`
  position: fixed;
  width: 486px;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
   

  @media (max-width: 768px) {
    width: 330px; 
    .product-item-cart {
      width: 300px !important;
    }  
  }

  .container-checkout {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    .price {
      display: flex;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      align-items: center;
      height: 50px;

      span {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 15px;

        color: #ffffff;
      }
    }
    button {
      width: 100%;
      height: 70px;
      background-color: #000000;
      outline: none;
      cursor: pointer;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 15px;
      color: #ffffff;
    }
  }

  .container-products-cart {
    overflow-y: auto;
    height: 310px;
    padding-top: 30px;
    padding-bottom: 30px;
    cursor: pointer;
  } 


  .product-item-flex {
    display: flex;
    justify-content: center;
  } 

  .header-cart {
    height: 101px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

    h3 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      width: 180px;
      color: #fff;
    }

    button {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 33px;
      color: #fff;
      background-color: #000000;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;
    }
  }

  .product-item-cart {
    position: relative;
    height: 95px;
    width: 379px;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-item-grid-cart-elements {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 50px;

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: #2c2c2c;
      width: 120px;
      margin-left: 15px;
    }

    .close {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 33px;
      color: #fff;
      background-color: #000000;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: absolute;
      top: -6px;
      right: -5px;
      outline: none;
    } 
  }

  .product-grid-elements {
    display: flex;
    flex-direction: column; 
    margin-right: 5px;

    .product-text-theAmount {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 5px;
      line-height: 6px;
      color: #000000;
      position: absolute;
      top: 28px;
    }
  }

  .product-container-buttons {
    display: flex;

    .price {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }

    .product-grid-buttons {
      margin-right: 40px;
      width: 50px;
      background: #ffffff;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;
      height: 19px;
      display: flex;
      justify-content: space-around;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;

      button {
        width: 20px;
        height: 100%;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        border: none;
        border-radius: 4px !important;
      }
    }
  }
`;

export const Button = styled("button")``;
export const Span = styled("span")``;
export const Title = styled("h3")``;
export const Img = styled("img")``;
export const Paragraph = styled("p")``;
export const Grid = styled("div")``;
