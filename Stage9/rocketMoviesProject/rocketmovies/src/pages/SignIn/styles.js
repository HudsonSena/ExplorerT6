import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    background-color: green;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    margin: auto;

    flex: left;
    
    display: flex;
    flex-direction: column;

    align-items: stretch;
    text-align: center;

    > h1 {
        color: #FF859B;
        font-size: 48px;
        font-family: Roboto Slab;
        font-weight: 700;
    }

    > h2 {}


    > Button {
        width: 100%;
    }
`;