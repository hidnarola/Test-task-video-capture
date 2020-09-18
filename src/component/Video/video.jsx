import React, { Component } from "react";
import {
  TextField,
  Grid,
  Button,
  Dialog,
  DialogContent,
  Box,
  Slider,
} from "@material-ui/core";
import ReactPlayer from "react-player";

function valuetext(value) {
  return `${value}`;
}
class VideoModal extends Component {
  state = {
    open: false,
    VideoSrc: null,
    value: [0, 0],
    duration: 0,
    showcapturevideo: false,
  };
  handleClose = () => {
    this.setState({ open: false, VideoSrc: null });
  };
  handleStream = (e) => {
    this.setState({ open: true, VideoSrc: e.target.value });
  };

  handleDuration = (duration) => {
    this.setState({ duration: duration, value: [0, duration] });
  };

  handleChange = (event, newValue) => {
    var Url = null;
    var Srcobj = this.state.VideoSrc.split("?");
    var newUrl = Srcobj[0] + "?" + Srcobj[1];

    Url =
      newUrl +
      "?" +
      "start=" +
      this.state.value[0] +
      "&" +
      "end=" +
      this.state.value[1];

    this.setState({ VideoSrc: Url });

    this.setState({ value: newValue });
  };

  handleCapture = () => {
    this.setState({ showcapturevideo: true });
    var Url = null;
    Url =
      this.state.VideoSrc +
      "?" +
      "start=" +
      this.state.value[0] +
      "&" +
      "end=" +
      this.state.value[1];

    this.setState({ VideoSrc: Url });
  };
  render() {
    return (
      <>
        <TextField
          id="outlined-basic"
          label="Add Youtube Video url"
          variant="outlined"
          value={this.state.VideoSrc}
          onChange={(e) => this.handleStream(e)}
        />
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          className="modal-bx  modal-delete-review"
          open={this.state.open}
        >
          <DialogContent dividers className="modal-body">
            <>
              {!this.state.showcapturevideo && (
                <>
                  <ReactPlayer
                    url={this.state.VideoSrc}
                    controls
                    onDuration={this.handleDuration}
                  />

                  <Slider
                    value={this.state.value}
                    defaultValue={0}
                    min={0}
                    max={this.state.duration}
                    onChange={this.handleChange}
                    aria-labelledby="range-slider"
                    step={1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />

                  <Button onClick={this.handleCapture}>Capture</Button>
                </>
              )}

              {this.state.showcapturevideo && (
                <ReactPlayer url={this.state.VideoSrc} controls />
              )}
            </>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default VideoModal;
