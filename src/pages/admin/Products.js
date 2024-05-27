import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditProduct from "./AddProduct";
// import { handleDelete } from "../../redux/products";

const ProductsList = () => {
  const productList = useSelector((state) => state?.products);
  console.log("productList: ", productList);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = (item) => {
    const removeItem = productList?.products?.find(
      (row) => row?.id === item?.id
    );
    console.log("removeItem: ", removeItem);

    // productList?.products.(removeItem);
    // dispatch(handleDelete(item));
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "centers",
          mt: 2,
        }}
      >
        <Typography sx={{ mt: 2 }} variant="h4">
          Items
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Product
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {productList?.products?.map((item) => (
          <Grid item xs={12} md={3}>
            <Card sx={{}}>
              <CardContent>
                <Typography variant="subtitle1">{item?.name}</Typography>
                <Typography variant="subtitle2">$ {item?.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleDeleteClick(item)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && (
        <AddEditProduct
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
    </Container>
  );
};

export default ProductsList;
