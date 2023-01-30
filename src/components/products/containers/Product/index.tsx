import {
  GridProductItem,
  GridImg,
  GridTexts,
  GridText,
  Button,
  Span,
  Img,
  Paragraph,
  H3,
  H4,
} from "../../styles";
import { DataProducts } from "../../../../interfaces";

import cart from "../../../../assets/icons/shopping_bag.png";

interface ProdutoItemProps {
  products: DataProducts[] | null;
  addProductCart: (product: DataProducts) => void;
}

export default function ProductItem({
  products,
  addProductCart,
}: ProdutoItemProps) {
  return (
    <>
      {products?.map((product) => {
        return (
          <GridProductItem key={product.id}>
            <GridImg>
              <Img src={product.photo} alt={product.photo} height={138} />
            </GridImg>
            <GridTexts>
              <H3>{product.name}</H3>
              <H4>
                {Number(product.price).toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </H4>
            </GridTexts>
            <GridText>
              <Paragraph>
                Redesigned from scratch and completely revised.
              </Paragraph>
            </GridText>
            <Button onClick={() => addProductCart(product)}>
              <Img src={cart} alt={cart} />
              <Span>Comprar</Span>
            </Button>
          </GridProductItem>
        );
      })}
    </>
  );
}
