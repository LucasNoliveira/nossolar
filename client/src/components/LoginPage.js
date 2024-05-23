import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const style = {
  backGround: {
    backgroundColor: "yellow",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    margin: "10px",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    marginRight: "10px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  personIcon: {
    fontSize: 50,
    marginBottom: 20,
    color: "blue",
  },
  inputBase: {
    border: "1px solid black",
    borderRadius: "3px",
  },
  inputBase: {
    border: "1px solid black",
    borderRadius: "3px",
    padding: "0px 3px 0px 3px", // Add some padding so that the placeholder margin is visible
  },
};

function loginPage() {
  return (
    <div
      style={{
        background: "green",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <CardContent style={style.cardContent}>
          <PersonIcon  style={style.personIcon} />
          <Typography style={style.text}>Insira seu Email.</Typography>
          <InputBase style={style.inputBase}  placeholder="joaozinho@exemplo.com..."></InputBase>
          <Typography style={style.text}>Insira sua Senha.</Typography>
          <InputBase style={style.inputBase} placeholder="Senha..."></InputBase>
          <Box>
            <Button style={{marginBottom:"1rem", marginTop:"0"}}>
              Esqueci a Senha
            </Button>
          </Box>
          <Box>
            <Button variant="contained" style={style.button}>
              Entrar
            </Button>
            <Button variant="contained" style={style.button}>
              Cadastre-se
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default loginPage;
