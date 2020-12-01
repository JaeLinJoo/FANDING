import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardImg, CardBody,
CardSubtitle, 
Container} from 'reactstrap';
import classnames from 'classnames';
import TabPane3 from './TabPane3';
import MyFunding from "./MyFunding";
import MyRecruit from "./MyRecruit";
import {connect} from 'react-redux';
import MyParticipation from "./MyParticipation";
import SideBar from "./SideBar"

const MyAccount = (props) => {
console.log(props)

  const [activeTab, setActiveTab] = useState("1");

  let myfunding=null;

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);

  };
  //리스트 만들기

  if(props.auth.isLoaded){
    return (
      <>
      
      <section class="gallery5 mbr-gallery cid-sgtDmxvlJH" id="gallery5-q">
      <Container>
        <Row>
          <SideBar />
          <div>
          <h4 style={{paddingTop: '28px', paddingLeft:'25px'}}>내 정보에서는 프로필 관리, 펀딩 관리, 총대 인증을 하고 위시 리스트를 볼 수 있습니다. </h4>
          </div>
        </Row>

          {/*<Nav tabs>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '1' })}*/}
          {/*        onClick={() => { toggle('1'); }}*/}
          {/*    >*/}
          {/*      내 정보 관리*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '2' })}*/}
          {/*        onClick={() => { toggle('2'); }}*/}
          {/*    >*/}
          {/*      총대 인증*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '3' })}*/}
          {/*        onClick={() => { toggle('3'); }}*/}
          {/*    >*/}
          {/*      내가 만든 펀딩 관리*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '4' })}*/}
          {/*        onClick={() => { toggle('4'); }}*/}
          {/*    >*/}
          {/*      참여한 펀딩*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '5' })}*/}
          {/*        onClick={() => { toggle('5'); }}*/}
          {/*    >*/}
          {/*      내가 만든 업체 모집글 관리*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*  <NavItem>*/}
          {/*    <NavLink*/}
          {/*        className={classnames({ active: activeTab === '6' })}*/}
          {/*        onClick={() => { toggle('6'); }}*/}
          {/*    >*/}
          {/*      마이 위시리스트*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*</Nav>*/}
          {/*<TabContent activeTab={activeTab}>*/}
          {/*  <TabPane tabId="1">*/}
          {/*    <Row>*/}
          {/*      <Col sm="12">*/}
          {/*        <h4>Tab 1 Contents</h4>*/}
          {/*      </Col>*/}
          {/*    </Row>*/}
          {/*  </TabPane>*/}
          {/*  <TabPane tabId="2">*/}
          {/*    <Row>*/}
          {/*      <Col sm="6">*/}
          {/*        <Card body>*/}
          {/*          <CardTitle>본인 인증</CardTitle>*/}
          {/*          <CardText>펀딩을 생성하려면 본인 인증이 필요합니다.</CardText>*/}
          {/*          <Button color="warning">본인 인증</Button>*/}
          {/*        </Card>*/}
          {/*      </Col>*/}
          {/*    </Row>*/}
          {/*  </TabPane>*/}
          {/*  <TabPane tabId="3">*/}
          {/*    <MyFunding></MyFunding>*/}
          {/*  </TabPane>*/}
          {/*  <TabPane tabId="4">*/}
          {/*    <MyParticipation/>*/}
          {/*  </TabPane>*/}
          {/*  <TabPane tabId="5">*/}
          {/*    <MyRecruit></MyRecruit>*/}
          {/*  </TabPane>*/}
          {/*</TabContent>*/}
        </Container>
        </section>
        </>

    );

  }else{
    return(
      <div>Loading...</div>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
    user_data: state.user_data
  }
};

export default connect(
    mapStateToProps
)(MyAccount);
