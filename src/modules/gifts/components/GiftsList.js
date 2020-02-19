import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GiftCard from '../../common/components/GiftCard';
import { List, AutoSizer } from 'react-virtualized';
const styles = theme => ({
  root: {
    margin: '1%',
    padding: '1%',
    float: 'left',
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      padding: '7%',
      width: '80%'
    }
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: 'hidden'
  },
  item: {
  }
});

class GiftsList extends React.Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered,
  };   
  render() {
    let {  giftCardsFiltered, userDetails, classes } = this.props;
  
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
          {({ height, width }) => {
            const itemsPerRow =  Math.floor(width / 300) || 1; 
            const rowCount = Math.ceil(giftCardsFiltered.length / itemsPerRow); 
            return (
              <div>
                <List
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={340}
                  rowRenderer={({ index, key, style }) => {
                    const items = [];
                    const fromIndex = index * itemsPerRow;
                    const toIndex = Math.min(
                      fromIndex + itemsPerRow,
                      giftCardsFiltered.length
                    );

                    for (let i = fromIndex; i < toIndex; i++) {
                      items.push(
                        <div className={classes.root} key={i}>
                          <GiftCard giftCard={giftCardsFiltered[i]} userEmail={userDetails.email}/>
                        </div>
                      );
                    }

                    return (
                      <div className={classes.item} key={key} style={style}>
                        {items}
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);