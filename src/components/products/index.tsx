import {
  Container,
  GridProcucts,
  ProductItem,
  GridImg,
  GridTexts,
  GridText,
  Button,
  Span,
  Img,
  Paragraph,
  H3,
  H4,
} from "./styles";

import apple from "../../assets/icons/apple-watch.png";
import cart from "../../assets/icons/shopping-bag.png";

export default function Products() {
  return (
    <Container>
      <GridProcucts>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem> 
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
        <ProductItem>
          <GridImg>
            <Img src={apple} alt={apple} height={138} />
          </GridImg>
          <GridTexts>
            <H3>Apple Watch Series 4 GPS</H3>
            <H4>R$399</H4>
          </GridTexts>
          <GridText>
            <Paragraph>
              Redesigned from scratch and completely revised.
            </Paragraph>
          </GridText>
          <Button>
            <Img src={cart} alt={cart} />
            <Span>Comprar</Span>
          </Button>
        </ProductItem>
      </GridProcucts>
    </Container>
  );
}
