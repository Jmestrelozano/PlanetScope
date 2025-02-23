import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../../interfaces/components/common/errorBoundary/errorBoundary.interface';

import {styles} from './styles';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  render() {
    const {hasError: propError, errorMessage, children} = this.props;
    const {hasError: stateError} = this.state;

    if (stateError || propError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.message}>
            {errorMessage || 'An unexpected error occurred.'}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return children;
  }
}