import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GiftCard from "../../common/components/GiftCard";
import { List } from "react-virtualized";
import { Button} from '@material-ui/core';
const styles = theme => ({
  root: {
    width: "90%",
    margin: '2%',
    padding: '1%'
  },
  table: {
    minWidth: 100
  },
  tableWrapper: {
    overflow: "hidden"
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
    let {  giftCardsFiltered } = this.props;
  
    return (
      <div alignItems= "center">
        <List
        width={1000}
        height={600}
        rowHeight={315}
        rowRenderer={this.rowRenderer}
        rowCount={giftCardsFiltered.length} />
      </div>
    );
  }
}

GiftsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftsList);