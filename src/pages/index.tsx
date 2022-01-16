import * as React from "react";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../Link";
import ProTip from "../ProTip";
import Copyright from "../Copyright";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { API, graphqlOperation  } from "aws-amplify";
import { createTodo, updateTodo, deleteTodo } from '../graphql/mutations';

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1f1f1f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  mt: 4,
};

const FABstyle = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  color: "secondary",
};

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return "";
    default:
      return state;
  }
}




const Home: NextPage = () => {
  const [itemcount, setValues] = React.useState(1);
  const [state, dispatch] = React.useReducer(reducer, { count: 1 });
  const [open, setOpen] = React.useState(false);
  const [addError, setAddError] = React.useState(false);
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemsNum, setItemsNum] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAdd = () => setValues(itemcount + 1);
  const [Accept, setAccept] = React.useState(true);
  const handleitemcountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0) {
      setValues(Number(event.target.value));
    }
  };
  const handleRemove = (e) => {
    if (itemcount != 1) {
      setValues(itemcount - 1);
    }
  };
  const addItem = () => {
    try {
      setItems([...items,itemName]);
      setItemsNum([...itemsNum,itemcount]);
      setAccept(false);
    } catch (error) {}
  };
  const resetItem = () => {
    setValues(1);
    setItemName("");
    // for (let i = 0; i <= items.length; i++) {
    //   console.log(items[i]);
    //   console.log(itemsNum[i]);
    // }
  };
  const resetItemList = () =>{
    setItems([]);
    setItemsNum([]);
    setAccept(true);
  }
  const addHandler = (event) => {
    if(itemName != ""){
      handleClose();
      addItem();
      resetItem();
      setAddError(false);
    }
    else{
      setAddError(true);
    }

  };
  const itemNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
    return (
      <ListItem sx={{ bgcolor: "#ffffff" }}>
        <Container
          sx={{
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            // alignItems: "flex-end",
          }}
        >
          <Container
            sx={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: "row",
              // alignItems: "flex-end",
            }}
          >
            <ListItemAvatar
              sx={{
                mt: 0,
                alignItems: "center",
                display: "flex",
              }}
            >
              <Avatar alt="Remy Sharp" src="https://i.ibb.co/z6yg5LX/2223379.png" />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "start",
                    }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {items[index]
                    /* {JSON.stringify(items[index]).split('"')[5]} */}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      mr: 1,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "end",
                    }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {"x" + itemsNum[index]
                    /* {"x" + JSON.stringify(itemsNum[index]).split(":")[2].slice(0, -1)} */}
                  </Typography>
                </React.Fragment>
              }
            />
          </Container>
          <Divider variant="middle" sx={{ width: "100%" }} />
        </Container>

        {/* <ListItemText primary={`Item ${index + 1}`} /> */}
      </ListItem>
    );
  }

  async function createTodoItems(){
    await API.graphql(graphqlOperation(createTodo, {input: {name: "Thanatat Pronpraserd",product_list:items,product_count:itemsNum}}));
    resetItemList();
  }
  
  return (
    <Container>
      <Container
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FixedSizeList
          height={400}
          width={"100%"}
          itemSize={46}
          itemCount={items.length}
          overscanCount={8}
        >
          {renderRow}
        </FixedSizeList>
        {/* <Container sx={{ display: "flex" }}>
        </Container> */}
        <Button
          variant="contained"
          color="secondary"
          disabled={Accept}
          sx={{ width: "100%", maxWidth: 360 }}
          onClick={createTodoItems}
        >
          Accept
        </Button>
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          sx={FABstyle}
          // style={FABstyle}
          onClick={() => {
            setOpen(true);
            dispatch({ type: "reset" });
          }}
        >
          <AddIcon />
        </Fab>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Modalstyle}>
            <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
              <Box sx={{ mr: 3 }}>
                <ImageList sx={{ width: 100, height: 100 }} cols={1} rowHeight={1}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <Box>
                <TextField
                  required
                  error={addError}
                  id="standard-required"
                  label="Serial Number"
                  type="Enter Serial Number"
                  variant="standard"
                  color="secondary"
                  value={itemName}
                  focused
                  sx={{ mb: 5 }}
                  onChange={itemNameChange}
                  // inputProps={{ style: { fontFamily: "Arial", color: "white" } }}
                />
                <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "row" }}>
                  <Box
                    sx={{
                      borderRadius: 1,
                      borderColor: "secondary.main",
                      border: 1,
                      width: 105,
                      mr: 5,
                    }}
                  >
                    <IconButton
                      color="info"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={handleRemove}
                      // onClick={() => dispatch({ type: "decrement" })}
                    >
                      <HorizontalRuleIcon />
                    </IconButton>
                    <TextField
                      required
                      id="count"
                      variant="standard"
                      value={itemcount}
                      color="info"
                      // defaultValue="1"
                      focused
                      size="medium"
                      sx={{ width: 15, mr: 1 }}
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        style: {
                          fontFamily: "Arial",
                          color: "white",
                        },
                      }}
                      onChange={handleitemcountChange}
                    />
                    <IconButton
                      color="info"
                      size="small"
                      onClick={handleAdd}
                      // onClick={() => dispatch({ type: "increment" })}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button variant="contained" color="secondary" onClick={addHandler}>
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>

        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip />
        <Copyright /> */}
      </Container>
    </Container>
  );
};

export default Home;

const itemData = [
  {
    img: "https://i.ibb.co/z6yg5LX/2223379.png",
    title: "Breakfast",
  },
];
