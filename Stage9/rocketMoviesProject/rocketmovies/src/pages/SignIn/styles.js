import styled from 'styled-components';
import backgroundimg from '../../assets/backgroundimg.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

    > section {
        float: left;
        flex: 40%;

        display: flex;
        justify-content: column;

        align-items: center;
        justify-content: center;
    }
`;

export const Form = styled.form`
    margin: auto;

    flex: left;
    
    display: flex;
    flex-direction: column;
    gap: 48px;

    align-items: stretch;

    > button {
        margin: auto;
    }

    > div h1 {
        color: #FF859B;
        font-size: 48px;
        font-family: Roboto Slab;
        font-weight: 700;
    }

    > div p {
        color: ${({ theme }) => theme.colors.white03}
    }

    > h2 {
        color: ${({ theme }) => theme.colors.white01}
    }

    > div div {
        margin-bottom: 8px;
    }
    > div div:nth-child(2){
        margin-bottom: 16px;
    } 
`;

export const Background = styled.div`
    flex: 60%;
    float: right;
    background: url(${backgroundimg}) no-repeat center top;
    background-size: cover;
    opacity: 50%;
`;