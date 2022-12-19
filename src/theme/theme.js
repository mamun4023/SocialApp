import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(232, 174, 11)',
      primaryInactive : 'rgb(200,174, 11)',
      primaryBg : 'rgba(232, 174, 11, 0.3)',
      primaryBgLight : 'rgba(232, 174, 11, 0.08)',
      secondary : '#80818E',
      info: 'rgb(147,129,255)',
      infoBg : 'rgba(147,129,255, 0.3)',
      infoBgLight : 'rgba(147,129,255, 0.1)',
      error: '#D32F2F',
      text: '#212121',
      border: '#212121',
      activeTabIcon: '#D3A708',
      inactiveTabIcon: '#80818E',
      activeTabLabel: '#2B2D42',
      inactiveTabLabel: '#80818E',
      black : 'rgb(43, 45,66)',
      white : "#ffffff"
      
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTabIcon: '#4FC3F7',
      inactiveTabIcon: '#FFFFFF',
      activeTabLabel: '#2B2D42',
      inactiveTabLabel: '#80818E',
    },
  },
};
