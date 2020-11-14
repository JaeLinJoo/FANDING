import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {NavLink, Button} from 'reactstrap';
import { compose } from 'redux';
import RecruitFormList from './RecruitFormList';

class CompanyRecruit extends Component {
    render(){
        const { recruitCompanies } = this.props;
        
        return(
            <div>

            <NavLink href="/find_company_form"><Button className="pull-right" outline color="primary">업체모집 폼 생성</Button></NavLink>
            <RecruitFormList recruitCompanies={recruitCompanies} />
        
            </div>
        )    
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        recruitCompanies: state.firestore.ordered.recruitCompanies
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([//data sync
        { collection: 'recruitCompanies',
        //where: ['fundingType', '==', 'reward'],
        } 
    ])
)(CompanyRecruit);