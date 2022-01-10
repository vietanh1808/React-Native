import React, { PureComponent } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/facebook.png')} />
      <Image
        testID="logo"
        style={[styles.iconFind, styles.iconHeader]}
        source={require('../assets/icons/find-icon.png')}
      />
      <Image
        style={[styles.iconMessenger, styles.iconHeader]}
        source={require('../assets/icons/messenger.png')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  iconHeader: {
    width: 27,
    height: 27,
    backgroundColor: '#dfe1e6',
    borderRadius: 20,
    overlayColor: '#ffffff',
    marginTop: 15,
  },
  iconMessenger: {
    marginLeft: '5%',
  },
  iconFind: {
    marginLeft: '26%',
  },
  logo: {
    width: '50%',
    height: 60,
    resizeMode: 'contain',
  },
})

export default Header
