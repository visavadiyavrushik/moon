import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const params = useParams();

  const { id } = params;

  const products = useSelector((state) => state?.products);
  console.log("products: ", products);

  const selectedProduct = products?.products.find(
    (item) => `${item.id}` === id
  );

  return (
    <Container>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">{selectedProduct?.name}</Typography>
          <Typography variant="subtitle2">
            $ {selectedProduct?.price}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductView;
