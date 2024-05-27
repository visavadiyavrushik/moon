import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartItems } from "../../redux/users";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const productList = useSelector((state) => state?.products);
  const navigate = useNavigate();

  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const dispatch = useDispatch();
  const handleAddtoCartClick = (item) => {
    dispatch(cartItems(item));
  };

  const filteredProduct = () => {
    let filtered = [];
    if (size) {
      filtered = productList?.products?.filter((r) => r.size === size);
    } else {
      filtered = productList?.products;
    }
    return filtered;
  };

  const products = filteredProduct();

  return (
    <Container>
      <Typography sx={{ mt: 2 }} variant="h4">
        Products
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Filter
      </Typography>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          name="size"
          labelId="demo-simple-select-label"
          id="size"
          value={size}
          label="size"
          onChange={handleChange}
        >
          <MenuItem value="s">S</MenuItem>
          <MenuItem value="m">M</MenuItem>
          <MenuItem value="l">L</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products?.map((item) => (
          <Grid item xs={12} md={3} key={item.id}>
            <Card sx={{}}>
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(`/products/${item.id}`)}
                >
                  {item?.name}
                </Typography>
                <Typography variant="subtitle2">$ {item?.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  //   disable={productList?.products?.includes(item)}
                  onClick={() => handleAddtoCartClick(item)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        {!productList?.products?.length ? (
          <Card sx={{}}>
            <CardContent>
              <Typography variant="h6">No Products Found</Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
};

export default Home;
