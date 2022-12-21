import styled from 'styled-components';
import { Colors } from '../../utilities/Colors';

export const Container = styled.div`
width:100%;
height:200px;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
margin-top: 50px;
background: rgb(3,3,3);
background: linear-gradient(180deg, rgba(3,3,3,1) 0%, #192b33 57%, #213944 100%);
`;

export const H1 = styled.h1`
color: ${Colors.white}};
font-size: 20px;
font-weight: 500;
margin-top: 20px;

`
