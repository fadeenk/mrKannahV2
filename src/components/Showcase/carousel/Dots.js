import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  dotOuter: {
    // width: 8,
    height: 8,
    padding: 4,
    display: "inline-block",
  },
  dot: {
    width: 8,
    height: 8,
    background: "#fff",
    transition: "all 400ms cubic-bezier(0.4, 0.0, 0.2, 1)",
    borderRadius: 4,
  },
};

class Dots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousIndex: props.index || 0,
    };
  }

  componentWillReceiveProps({ index }) {
    if (index !== this.props.index) {
      this.setState({ previousIndex: this.props.index });
      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.setState({ previousIndex: index });
      }, 450);
    }
  }

  componentWillUnmount() {
    if (this.timeout != null) {
      clearTimeout(this.timeout);
    }
  }

  handleDotClick = (index, event) => {
    if (this.props.onDotClick != null) {
      this.props.onDotClick(index, event);
    }
  };

  render() {
    const {
      classes,
      count,
      index,
      style = {},
      onDotClick,
      ...other
    } = this.props;
    const { previousIndex } = this.state;

    return (
      <div style={{ ...style, width: count * 16 }} {...other}>
        <div style={{ height: "16px" }}>
          {Array.from(Array(count), (_, i) => (
            <div
              key={i}
              className={classes.dotOuter}
              style={{ cursor: onDotClick != null ? "pointer" : "inherit" }}
              onClick={(event) => this.handleDotClick(i, event)}
            >
              <Paper
                elevation={0}
                className={classes.dot}
                style={{
                  opacity:
                    i >= Math.min(previousIndex, index) &&
                    i <= Math.max(previousIndex, index)
                      ? 0
                      : 0.5,
                }}
              />
            </div>
          ))}
          <Paper
            elevation={0}
            className={classes.dot}
            style={{
              position: "relative",
              top: "-8px",
              left: Math.min(previousIndex, index) * 16 + 4,
              width: Math.abs(previousIndex - index) * 16 + 8,
            }}
          />
        </div>
      </div>
    );
  }
}

Dots.propTypes = {
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object,
  onDotClick: PropTypes.func,
};

export default withStyles(styles)(Dots);
