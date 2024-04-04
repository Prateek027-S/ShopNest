import React from 'react'
import HomeHeader from './components/HomeHeader'
import DefaultHeader from './components/DefaultHeader'
import Colors from '../../../Theme/colors'

const Header = ({
  variant = 'default',
  headerHeading,
}) => {

  switch (variant) {
    case 'home':
      return (
        <HomeHeader colors={Colors} />
      )
    default:
      return (
        <DefaultHeader heading={headerHeading} />
      )
  }
}

export default Header

Header.defaultProps = {
  variant: 'default',
  headerHeading: 'Heading',
  onBackPress: () => {},
  rightText: '',
  onRightPress: () => {}
}
