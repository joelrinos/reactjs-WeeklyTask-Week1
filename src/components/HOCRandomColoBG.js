import React from "react";

// Reference: https://medium.com/frontendweb/best-way-to-generate-a-random-color-in-react-js-and-build-a-color-project-222e3dff3571
// Returns a hex code.
import randomColor from "randomcolor";
import { Box, Typography } from "@mui/material/";

const HOCRandomColoBG = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: "",
      };
    }

    componentDidMount() {
      let color = randomColor();
      this.setState({
        bgColor: color,
      });
    }

    render() {
      const { bgColor } = this.state;
      return (
        <React.Fragment>
          <Box
            mt={2}
            sx={{
              width: 300,
              height: 300,
              bgcolor: bgColor,
            }}
            gap={10}
          >
            <Typography variant="p" component="p">
              {bgColor}
            </Typography>
          </Box>
          <WrappedComponent></WrappedComponent>
        </React.Fragment>
      );
    }
  };
};

export default HOCRandomColoBG;

/*const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}*/
