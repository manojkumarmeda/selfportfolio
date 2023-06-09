import React from "react";
import Card from "@mui/core/Card";
import Button from "@mui/core/Button";
import Grid from "@mui/core/Grid";
import programmer from "../assets/projects/programmer.png";


//Tabs
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  input: {
    display: "none"
  },
  img: {
    width: 200,
    height: 256,
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: "initial", // initial
    imageUploaded: 0,
    selectedFile: programmer
  };

  handleUploadClick = event => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  renderInitialState() {
    const { classes } = this.props;
    //const { value } = this.state;

    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            width="100%"
            className={classes.img}
            src={this.state.selectedFile}
          />
        </Grid>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select Image
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
            //   multiple
              type="file"
              onChange={this.handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  }

  renderUploadedState() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <img
            width="100%"
            className={classes.img}
            src={this.state.selectedFile}
          />
        </Grid>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Select Image
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
          </Button>
        </label>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={this.props.cardName}>
          {(this.state.mainState === "initial" && this.renderInitialState()) ||
            (this.state.mainState === "uploaded" && this.renderUploadedState())}
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
