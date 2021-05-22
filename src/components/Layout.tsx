import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Layout: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafb',
  },
});

export default Layout;
