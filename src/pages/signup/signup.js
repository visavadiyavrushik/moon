import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  // Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/users";
// import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "../../redux/customers";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  console.log("login: ", login);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const customers = useSelector((state) => state.customers);
  console.log("customers: ", customers);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(addCustomer([...customers?.customers, login]));
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "500px" }}>
      <form onSubmit={handleSumbit}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <TextField
          name="email"
          label="Email"
          sx={{ mb: 2, width: "100%" }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <FormControl variant="outlined" sx={{ width: "100%", mb: 2 }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            sx={{
              width: "100%",
              "&.MuiInputBase-root input": {
                width: "100%",
              },
            }}
            onChange={(e) => {
              handleChange(e);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Have account?
          </Typography>
        </Box>
        <Box>
          <Button fullWidth type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
