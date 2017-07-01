import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-materialize'
import SourcesList from './SourcesList'
import Header from '../common/Header'
import newsImg from '../../assets/img/news-sources.jpg'

class SourcesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      title: 'New Sources',
      subTitle: 'Choose from these curated News Sources',
    }
  }
    render() {
        return (
          <div>
            <Header
              title={this.state.title}
              subTitle={this.state.subTitle}
              backgroundImage={this.state.backgroundImage}
            />
            <SourcesList/>
          </div>
        );
    }
}

export default SourcesPage;
