import { extendTheme } from 'native-base';
import { PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const theme = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    '2xs': RFValue(PixelRatio.getFontScale() * 10),
    xs: RFValue(PixelRatio.getFontScale() * 12),
    sm: RFValue(PixelRatio.getFontScale() * 14),
    md: RFValue(PixelRatio.getFontScale() * 16),
    lg: RFValue(PixelRatio.getFontScale() * 18),
    xl: RFValue(PixelRatio.getFontScale() * 20),
    '2xl': RFValue(PixelRatio.getFontScale() * 24),
    '3xl': RFValue(PixelRatio.getFontScale() * 30),
    '4xl': RFValue(PixelRatio.getFontScale() * 36),
    '5xl': RFValue(PixelRatio.getFontScale() * 48),
    '6xl': RFValue(PixelRatio.getFontScale() * 60),
    '7xl': RFValue(PixelRatio.getFontScale() * 72),
    '8xl': RFValue(PixelRatio.getFontScale() * 96),
    '9xl': RFValue(PixelRatio.getFontScale() * 128),
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
