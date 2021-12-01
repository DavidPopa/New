import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0.2rem solid #000",
    width: "90%",
    height: "90%",
    boxShadow: theme.shadows[5],
    position: "relative",
  },
  btn: {
    position: "absolute",
    right: "0",
    top: "-0.05rem",
    // backgroundColor: "red",
  },
}));

export default function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Timeline</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button className={classes.btn} onClick={handleClose}>
              <AiOutlineClose size="1rem" />
            </button>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan odio enim.
            </p>
            <footer>
              <p>valeu</p>
            </footer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
