import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';

/**
 * TODO : random background image
 */

// for simplicity, use class component for now,
// will change to stateless component later
class BackgroundImg extends React.Component {
  state = { ready: false };

  // simulate delay
  componentDidMount() {
    setTimeout(() => {
      this.setState({ ready: true });
    }, 100);
  }

  render() {
    const { classes } = this.props;
    let imgClassName = classes.img;
    if (this.state.ready) {
      imgClassName += ` ${classes.imgShow}`;
    }
    return (
      <div className={classes.backgroundImg}>
        <img
          className={imgClassName}
          alt="background"
          src="https://lh3.googleusercontent.com/-VRJNLuIZyCTgfmY08_dUY-tbgkVTMS95ic6w35AnsmpDNVjesQv-uMnvg1Xk85bXK133Kye4jWPd2SwTtJbg50=w1920-h1080-p-k-nd-no"
        />

        <div className={classes.cover} />
      </div>
    );
  }
}

BackgroundImg.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  backgroundImg: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: '100%',
    left: 0,
    minHeight: 500,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  cover: {
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    height: '100%',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.8) 100%)',
  },
  img: {
    width: '100vw',
    height: '100vh',
    transition: 'opacity 1.5s linear',
    opacity: 0,
  },
  imgShow: {
    opacity: 1,
  },
});
export default withStyles(styles)(BackgroundImg);
