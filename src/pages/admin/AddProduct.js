import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/products";
// import { Autocomplete, Select } from "@mui/material";
import { Option } from "@mui/base/Option";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AddEditProduct({ handleClickOpen, handleClose, open }) {
  const dispatch = useDispatch();

  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const productList = useSelector((state) => state?.products);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log("formJson: ", formJson);
            const payload = {
              id: productList?.products?.length + 1,
              ...formJson,
              size,
            };
            dispatch(addProducts(payload));
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="price"
            label="Price"
            type="number"
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
