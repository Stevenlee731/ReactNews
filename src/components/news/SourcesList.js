import React from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize'
import {connect} from 'react-redux'
import * as newsActions from '../../actions/newsActions'
import {bindActionCreators} from 'redux'

const SourcesList = () => {
  // console.log(this.props.sources)
  return (
      <Row>
        <Col s={4}>
          <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
          		title="Card Title"
          		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          		<p><a href="#">This is a link</a></p>
          </Card>
        </Col>
        <Col s={4}>
          <h1>News Sources</h1>
          <p>Choose from these curated News Sources</p>
        </Col>
        <Col s={4}>
          <h1>News Sources</h1>
          <p>Choose from these curated News Sources</p>
        </Col>
      </Row>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    sources: state.sources
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newsActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SourcesList)
