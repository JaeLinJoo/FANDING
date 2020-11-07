import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
//import moment from 'moment';


const FundingDetail = (props) => {
    //const id = props.match.params.id; //route information
    //const { funding, auth } = props;
    //if(!auth.uid) return <Redirect to='/signin' />
    const { funding } = props;
    if (funding)
     {
         return(
            <Card sm="6">
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            <CardTitle>{funding.fundingTitle}</CardTitle>
            <CardSubtitle> subtitle</CardSubtitle>
            <CardText>{funding.content}</CardText>
            {/*<Button>Button</Button>*/}
            </CardBody>
            </Card>
         )
     }
     else{
         return (
           <div>
               <p>Loading funding...</p>
           </div>
        )
     }
        
}
   
    


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const fundings = state.firestore.data.fundings;
    const funding = fundings ? fundings[id] : null
    return {
      funding: funding,
      auth: state.firebase.auth
    }
  }

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [{
        collection: 'fundings', doc: props.match.params.id
    }])
)(FundingDetail)
