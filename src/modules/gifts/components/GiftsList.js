import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GiftCard from '../../common/components/GiftCard';
import { List, AutoSizer } from 'react-virtualized';
export const styles = theme => ({
  root: {
    margin: '1%',
    padding: '1%',
    float: 'left',
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      padding: '7%',
      width: '80%'
    }
  }
});

export class GiftsList extends React.Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered
  };  
  renderItems = ({ index, key, style, parent }) => {
    const items = [];
    const itemsPerRow = parent.props.itemsPerRow;
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(
      fromIndex + itemsPerRow,
      this.props.giftCardsFiltered.length
    );

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <div className={this.props.classes.root} key={i}>
          <GiftCard giftCard={this.props.giftCardsFiltered[i]} userEmail={this.props.userDetails.email}/>
        </div>
      );
    }

    return (
      <div key={key} style={style}>
        {items}
      </div>
    );
  }
  autoSizer = ({ height, width }) => {
    const itemsPerRow =  Math.floor(width / 300) || 1; 
    const rowCount = Math.ceil(this.props.giftCardsFiltered.length / itemsPerRow); 
    return (
      <div>
        <List
          width={width}
          height={height}
          rowCount={rowCount}
          rowHeight={340}
          rowRenderer={this.renderItems}
          itemsPerRow={itemsPerRow}
        />
      </div>
    );
  }
  render() {
    return (
      // <div alignItems= 'center'>
      //   <List
      //   width={1000}
      //   height={600}
      //   rowHeight={315}
      //   rowRenderer={this.rowRenderer}
      //   rowCount={giftCardsFiltered.length} />
      // </div>
      <div style={{ marginTop: '10px', height: '80vh' }}>
        <AutoSizer>
          {this.autoSizer}
        </AutoSizer>
      </div>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);