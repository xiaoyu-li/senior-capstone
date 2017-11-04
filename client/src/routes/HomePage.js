import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import Welcome from '../components/Welcome';
import BadgeList from '../components/BadgeList';
import BadgeListItem from '../components/BadgeListItem';
import chakras from '../common/chakras';

const Badges = (props) => {
  const { onToggleChakra } = props;
  return (
    <BadgeList>
      {chakras.map((c, i) => (
        <BadgeListItem
          label={c.name}
          type={c.type}
          progress={c.progress}
          key={c.name}
          onClick={onToggleChakra.bind(this, i)}
        />
      ))}
    </BadgeList>
  );
};

class HomePage extends React.Component {
  handleChakraToggle = (index, e) => {
    console.info(e);
    console.info(index);
  };
  render() {
    return (
      <div>
        <Welcome />
        <Badges onToggleChakra={this.handleChakraToggle} />
      </div>
    );
  }
}

const styles = () => {};
export default withStyles(styles)(HomePage);
