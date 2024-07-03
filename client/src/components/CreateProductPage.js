import React from "react";
import {
  Card,
  CardContent,
  InputBase,
  Typography,
  Button,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

function CreateProductPage() {
  const style = {
    inputBase: {
      border: "1px solid #AEB7B3",
      borderRadius: "3px",
      padding: "0 .5rem",
      background: "#EEF0EB",
      marginTop: ".5rem",
      marginBottom: ".5rem",
      boxShadow: "inset 0 0 1px black",
      width: "30rem",
    },
    cardContent: {
      background: "white",
      width: "100%",
      height: "90%",
      flexDirection: "column",
      alignItems: "flex-start",
      display: "flex",
    },
    typography: {
      textAlign: "left",
      fontWeight: "bold",
    },
    image: {
      width: "100px",
      height: "100px",
      marginLeft: "1rem",
    },
  };

  return (
    <div
      style={{
        background: "#CDD1DE",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Card
        sx={{
          width: "90%",
          height: "90%",
          background: "white",
          overFlowY: "auto",
          alignItems: "flex-start",
          border: "3px solid #CDD1DE",
        }}
      >
        <Box sx={{ display: "flex", border: "3px solid #CDD1DE" }}>
          <img
            src="https://scontent.fsdu3-1.fna.fbcdn.net/v/t39.30808-1/318768361_487649283434966_4923966161297574562_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=zzM-ysoX78YQ7kNvgG60A-p&_nc_ht=scontent.fsdu3-1.fna&oh=00_AYBxLE6I_uDk7wsUHbKJQ3a5zysEse_I7Waij2YJ6gR_Dw&oe=668B9C95"
            alt="Logo Nosso Lar"
            style={style.image}
          ></img>
          <Typography
            variant="h5"
            style={{
              ...style.typography,
              margin: "1rem",
              background: "white",
            }}
          >
            Criar produto:
          </Typography>
        </Box>
        <CardContent style={style.cardContent}>
          <Typography variant="h6" style={style.typography}>
            Nome do Produto:
          </Typography>
          <InputBase style={style.inputBase} placeholder=""></InputBase>
          <Typography variant="h6" style={style.typography}>
            Preço do Produto:
          </Typography>
          <InputBase style={style.inputBase} placeholder=""></InputBase>
          <Typography variant="h6" style={style.typography}>
            Categoria do produto:
          </Typography>
          <FormControl
            fullWidth
            sx={{ marginTop: ".5rem", marginBottom: ".5rem" }}
          >
            <Select
              displayEmpty
              style={{
                ...style.inputBase,
              }}
              inputProps={{ "arial-label": "Categoria" }}
            >
              <MenuItem value="hortifruti">Hortifruti</MenuItem>
              <MenuItem value="Padaria">Padaria</MenuItem>
              <MenuItem value="Açougue">Açougue</MenuItem>
              <MenuItem value="Bebidas">Bebidas</MenuItem>
              <MenuItem value="Rotisseria">Rotisseria</MenuItem>
              <MenuItem value="Bomboniere">Bomboniere</MenuItem>
              <MenuItem value="Bazar">Bazar</MenuItem>
              <MenuItem value="Automotivo">Automotivo</MenuItem>
              <MenuItem value="Petshop">Petshop</MenuItem>
              <MenuItem value="Mercearia">Mercearia</MenuItem>
              <MenuItem value="Limpeza">Limpeza</MenuItem>
              <MenuItem value="Laticínios">Laticínios</MenuItem>
              <MenuItem value="Bebês">Bebês</MenuItem>
              <MenuItem value="Higiene">Higiene</MenuItem>
              <MenuItem value="Congelados">Congelados</MenuItem>
              <MenuItem value="Utilidades">Utilidades</MenuItem>
              <MenuItem value="Japonês">Japonês</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" style={style.typography}>
            Descrição do produto:
          </Typography>
          <InputBase style={style.inputBase} placeholder=""></InputBase>
          <Typography variant="h6" style={style.typography}>
            Imagem do produto:
          </Typography>
          <InputBase style={style.inputBase} placeholder=""></InputBase>
          <Button
            variant="contained"
            sx={{ background: "green", margin: "1rem" }}
          >
            Criar Produto
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateProductPage;
