import React from 'react';
import { Row, Container } from 'reactstrap';

import PageContact from './components/PageContact';
import PageConversation from './components/PageConversation';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Container fluid className='App'>
        <Row>
          <PageContact />
          <PageConversation idConversation={store.getState().idConversation}/>
        </Row>
      </Container>
    );
  }
}

