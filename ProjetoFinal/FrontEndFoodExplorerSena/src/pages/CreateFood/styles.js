import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;

export const Content = styled.main`
    grid-area: content;
    width: 100%;
    height: 100%;
    padding: 24px 123px;

    display: flex;
    flex-direction: column;
    gap: 42px;

    color: ${({ theme }) => theme.colors.txtDescription};
    font-family: 'Poppins';

    .voltar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    > svg > path {
        fill: ${({ theme }) => theme.colors.txtDescription};
        font-size: 24px;
    }

    > div > button {        
        color: ${({ theme }) => theme.colors.txtDescription};
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 1px;
    }
`;

export const Form = styled.form`

    display: flex;
    flex-direction: column;

    gap: 32px;

    font-family: 'Poppins';

    input {
        text-align: left;
    }
`;