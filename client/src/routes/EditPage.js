import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import Welcome from '../components/Welcome';
import BadgeList from '../components/BadgeList';

const EditPage = (props) => {
  const { match } = props;
  return (
    <div>
      <Welcome />
      <BadgeList>{match.params.label}</BadgeList>
    </div>
  );
};

EditPage.propTypes = {};

const styles = () => {};
export default withStyles(styles)(EditPage);
