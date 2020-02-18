import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GiftCard from "../../common/components/GiftCard";
import { List, AutoSizer } from "react-virtualized";
import { Button} from '@material-ui/core';
const styles = theme => ({
  root: {
    margin: '1%',
    padding: '1%',
    float: "left",
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      width: '94%',
      margin: '4%'
    }
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: "hidden"
  },
  item: {
  }
});

class GiftsList extends React.Component {
  state = {
    giftCardsFiltered: this.props.giftCardsFiltered,
    page: 0,
    rowsPerPage: 12
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };
   rowRenderer=({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  })=> {
    let {giftCardsFiltered,userDetails}=this.props
    return (
      <div key={key} style={style}>
      <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <GiftCard giftCard={giftCardsFiltered[index]} userEmail={userDetails.email}/>
            {/* {(userDetails.email === "lathak95@gmail.com" || this.props.userDetails.email === "yoyogiftg2@gmail.com")? <Button variant="contained" color="primary" onClick={()=> this.props.handleUpdateClick(giftCardsFiltered[index].id)}>UPDATE</Button> : null} */}
          </Grid>
        </Grid></div>)
      
   
  }
  render() {
    let {  giftCardsFiltered, userDetails, classes } = this.props;
  
    return (
      // <div alignItems= "center">
      //   <List
      //   width={1000}
      //   height={600}
      //   rowHeight={315}
      //   rowRenderer={this.rowRenderer}
      //   rowCount={giftCardsFiltered.length} />
      // </div>
      <div style={{ marginTop: "10px", height: "80vh" }}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow =  Math.floor(width / 340) || 1; 
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