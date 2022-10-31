import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withNavigationItem, withNavigation } from 'react-navigation'
import { Route, Router, Switch } from 'react-router-native'
import { createMemoryHistory } from 'history'
import messaging from '@react-native-firebase/messaging'
import styled from 'styled-components';

const history = createMemoryHistory()

const HomeStyles = styled.div`
  position: absolute;
  visibility: hidden;
  width: 430px;
  height: 915px;
  left: -1px;
  top: 1px;
  background: url(image);
  opacity: 0.1;
`;





function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )

  function About() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>About</Text>
      </View>
    )
  }

  function App(props) {
    useEffect(() => {
      messaging().registerDeviceForRemoteMessages()
      messaging().requestPermission()
      messaging().getToken().then(token => {
        console.log(token)
      })
    }, [])

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    )
  }

  export default withNavigation(App)
