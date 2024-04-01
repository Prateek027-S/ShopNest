import React from 'react'
import HomeHeader from './components/HomeHeader'
import DefaultHeader from './components/DefaultHeader'
import { useTheme } from 'native-base'

const Header = ({
  variant = 'default',
  headerHeading,
}) => {
  const { colors } = useTheme()

  switch (variant) {
    case 'home':
      return (
        <HomeHeader colors={colors} />
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
