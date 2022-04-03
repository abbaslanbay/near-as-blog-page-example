import 'regenerator-runtime/runtime';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import { Container,Row,Col } from 'react-bootstrap';
import CreateBlog from './Views/Blog/CreateBLog';
import ViewBlog from './Views/Blog/View';


const App = ({ contract, currentUser, nearConfig, wallet }) => {

  return (
    <>

      <Header currentUser={currentUser} wallet={wallet} nearConfig={nearConfig}/>
      <Container>
        <Row>
          <Col md={3}>
            <CreateBlog contract={contract}  currentUser={currentUser}/>
          </Col>
          <Col md={9}>
          <ViewBlog contract={contract}  currentUser={currentUser}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

App.propTypes = {
  contract: PropTypes.shape({
    createBlog: PropTypes.func.isRequired,
    getAll: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;