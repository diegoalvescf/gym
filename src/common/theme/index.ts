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
    xxl: {
      absolute: PixelRatio.getFontScale() * 36,
      responsive: RFValue(PixelRatio.getFontScale() * 36),
    },
    xl: {
      absolute: PixelRatio.getFontScale() * 22,
      responsive: RFValue(PixelRatio.getFontScale() * 22),
    },
    lg: {
      absolute: PixelRatio.getFontScale() * 20,
      responsive: RFValue(PixelRatio.getFontScale() * 20),
    },
    xxm: {
      absolute: PixelRatio.getFontScale() * 18,
      responsive: RFValue(PixelRatio.getFontScale() * 18),
    },
    xm: {
      absolute: PixelRatio.getFontScale() * 16,
      responsive: RFValue(PixelRatio.getFontScale() * 16),
    },
    md: {
      absolute: PixelRatio.getFontScale() * 14,
      responsive: RFValue(PixelRatio.getFontScale() * 14),
    },
    sm: {
      absolute: PixelRatio.getFontScale() * 12,
      responsive: RFValue(PixelRatio.getFontScale() * 12),
    },
    xs: {
      absolute: PixelRatio.getFontScale() * 10,
      responsive: RFValue(PixelRatio.getFontScale() * 10),
    },
    xxs: {
      absolute: PixelRatio.getFontScale() * 8,
      responsive: RFValue(PixelRatio.getFontScale() * 8),
    },
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
