import React, { Component } from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class ErrorBoundary extends Component {
  state = {
    hasFailed: false,
    isOpen: true
  };

  static getDerivedStateFromError(error) {
    return {
      hasFailed: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { hasFailed, isOpen } = this.state;
    if (hasFailed) {
      return (
        <Modal isOpen={isOpen}>
          <ModalHeader toggle={this.handleToggle}>
            {' '}
            Unexpected Error{' '}
          </ModalHeader>
          <ModalBody>
            Ups! This is an unexpected error, be sure whether you have internet
            connection or you are connected to our servers, our team is working
            in this behaviour in the mean time.
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.handleToggle}>
              {' '}
              Close{' '}
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
