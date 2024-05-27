import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  //   TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItems, qtyAdd } from "../../redux/users";
// import { useParams } from "react-router-dom";

const Cart = () => {
  //   const params = useParams();

  //   const { id } = params;

  const userProducts = useSelector((state) => state?.user?.cart);
  const dispatch = useDispatch();

  const [increse, setIncrese] = useState({ data: null });

  const handleIncreseClick = (cartItem) => {
    console.log("cartItem: ", cartItem);
    // let cartItems = [];
    // const selectedProduct = userProducts?.product?.find(
    //   (item) => item.id === cartItem?.data.id
    // );
    // setIncrese({
    //   ...increse,
    //   data: { selectedProduct, qty: increse.qty || 0 + 1 },
    // });
  };

  //   const handleQty = (cartItem) => {
  //     const selectedProduct = userProducts?.product?.find(
  //       (item) => item.id === cartItem?.id
  //     );

  //     console.log("selectedProduct: ", selectedProduct);
  //   };

  //   useEffect(() => {
  //     dispatch(qtyAdd(increse));
  //   }, [dispatch, increse]);

  return (
    <Container>
      {userProducts?.product?.map((cartItem) => (
        <Card sx={{ mt: 2, width: "100%" }}>
          <CardContent>
            <Typography variant="h5">{cartItem?.name}</Typography>
            <Typography variant="subtitle2">$ {cartItem?.price}</Typography>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Button>-</Button>
              <Button>{cartItem?.qty || 1}</Button>
              <Button
                onClick={() => {
                  handleIncreseClick({ ...increse, data: cartItem });
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Cart;
