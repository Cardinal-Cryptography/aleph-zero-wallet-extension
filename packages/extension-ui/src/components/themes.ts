// Copyright 2019-2023 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const darkTheme = {
  accountDotsIconColor: '#00CCAB',
  addAccountImageBackground: '#1A1B20',
  addButtonBackground:'linear-gradient(0deg, rgba(0, 234, 199, 0.1), rgba(0, 234, 199, 0.1)), #111B24;',
  addButtonDisabledBackground:'linear-gradient(0deg, rgba(0, 234, 199, 0.1), rgba(0, 234, 199, 0.1)), #111B24;',
  addButtonFocusBorder:'1px dashed rgba(0, 234, 199, 0.3);',
  addButtonHoverBackground:'linear-gradient(0deg, rgba(0, 234, 199, 0.2), rgba(0, 234, 199, 0.2)), #111B24;',
  addButtonHoverBoxShadow:'0px 0px 16px rgba(0, 204, 171, 0.2);',
  avatarBorderColor: '#FFFFFF',
  backButtonBackground: '#3A3B41',
  backButtonBackgroundHover: '#3a3b41ad',
  backButtonTextColor: '#FFFFFF',
  background: 'radial-gradient(104.44% 39.97% at 50% 0%, #14202A 41.83%, rgba(20, 32, 42, 0) 100%), #111B24;',
  bodyColor: '#20222A',
  borderRadius: '8px',
  boxBackground: '#111B24',
  boxBorderColor: '#1B2B38',
  boxLineHeight: '1rem',
  boxMargin: '0.75rem 0',
  boxPadding: '0 0.25rem',
  boxShadow: 'rgba(0, 0, 0, 0.86)',
  buttonBackground: '#00EAC7',
  buttonBackgroundDanger: '#FF5E5C',
  buttonBackgroundDangerHover: '#D93B3B',
  buttonBackgroundDisabled: 'linear-gradient(0deg, rgba(0, 234, 199, 0.3), rgba(0, 234, 199, 0.3)), #111B24;',
  buttonBackgroundHover: '#7FF4E3',
  buttonBackgroundSuccess: '##66D16F',
  buttonBorderFocused: '1px dashed #111B24',
  buttonBorderRadius: '24px',
  buttonHoverBoxShadow: '0px 0px 20px rgba(127, 244, 227, 0.6);',
  buttonSecondaryBackground: '#1B2B38',
  buttonSecondaryBackgroundDisabled: 'linear-gradient(0deg, rgba(27, 43, 56, 0.3), rgba(27, 43, 56, 0.3)), #111B24;',
  buttonSecondaryBackgroundHover: '#2F4252',
  buttonSecondaryBorderFocused: '1px dashed #415566;',
  buttonSecondaryHoverBoxShadow: '0px 0px 16px rgba(165, 181, 194, 0.2);',
  buttonSecondaryTextColor: '#BCCBD6',
  buttonTextColor: '#111B24',
  connectedDotColor: 'seagreen',
  errorBorderColor: '#7E3530',
  errorColor: '#E42F2F',
  fontSize: '16px',
  highlightedAreaBackground: '#212226',
  iconDangerColor: '#FF5E5C',
  iconNeutralColor: '#8E8E8E',
  iconWarningColor: '#00CCAB',
  id: 'dark',
  identiconBackground: '#F4F5F8',
  inputBackground: '#111218',
  inputBorderColor: '#43444B',
  inputLabelFontSize: '10px',
  labelColor: '#9F9E99',
  labelFontSize: '13px',
  labelLineHeight: '18px',
  lineHeight: '26px',
  menuBackground: '#16232E',
  parentLabelColor: '#4A7463',
  popupBackground: '#38393F',
  primaryColor: '#00CCAB',
  primaryFontFamily: 'Karla, sans-serif',
  readonlyInputBackground: '#1A1B20',
  secondaryFontFamily: 'Gilroy, sans-serif',
  skeletonBackground: '#14212A',
  subTextColor: '#BCCBD6',
  textColor: '#FFFFFF',
  textColorDanger: '#00CCAB',
  tooltipBackground: '#111B24',
  tooltipBorderColor: '#1B2B38',
  tooltipBoxShadow: '0px 24px 38px rgba(12, 19, 26, 0.14), 0px 9px 46px rgba(12, 19, 26, 0.12), 0px 11px 15px rgba(12, 19, 26, 0.2);',
  tooltipTextColor: '#BCCBD6',
  warningColor: '#FFD23F'
};

export declare type Theme = typeof darkTheme;

const lightTheme: Theme = {
  ...darkTheme,
  addAccountImageBackground: '#FFF',
  backButtonBackground: '#D7D7D7',
  backButtonBackgroundHover: '#d7d7d7ad',
  backButtonTextColor: '#454545',
  background: '#FAFAFA',
  bodyColor: '#FFFFFF',
  boxBackground: '#FFFFFF',
  boxBorderColor: '#DADFEA',
  boxShadow: 'rgba(0, 0, 0, 0.3)',
  buttonBackgroundDanger: '#DC2222',
  errorBorderColor: '#E42F2F',
  highlightedAreaBackground: '#EFEFEF',
  iconDangerColor: '#DC2222',
  iconNeutralColor: '#939CB1',
  id: 'light',
  inputBackground: '#FFFFFF',
  inputBorderColor: '#DDE1EB',
  labelColor: '#333333',
  parentLabelColor: '#215B4F',
  popupBackground: '#FFFFFF',
  readonlyInputBackground: '#FFF',
  subTextColor: '#454545',
  textColor: '#242529',
  textColorDanger: '#F24A4A'
};

export const themes = {
  dark: darkTheme,
  light: lightTheme
};

export declare type AvailableThemes = keyof typeof themes;

export function chooseTheme (): AvailableThemes {
  return 'dark';
}
