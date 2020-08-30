import styled from 'styled-components/native';
import Constants from 'expo-constants'

import colors from '../../styles/colors'
import { Platform } from 'react-native';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0

export const Wrapper = styled.View`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight};
`

export const Container = styled.View`
    padding-left: 14px;
`;


export const Main = styled.View``