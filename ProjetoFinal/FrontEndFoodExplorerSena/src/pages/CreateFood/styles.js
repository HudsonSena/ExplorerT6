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
    padding: 24px 123px 24px 123px;

    display: flex;
    flex-direction: column;
    gap: 20px;

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

    .info01 {
        display: flex;
        flex-direction: row;
        gap: 32px;

        > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            div {
                background-color: ${({ theme }) => theme.colors.bgIpt02};
            }
        }
    }

    .info02 {
        display: flex;
        flex-direction: row;
        gap: 32px;

        > div {
            display: flex;
            flex-direction: column;
            gap: 10px;

            div {
                background-color: ${({ theme }) => theme.colors.bgIpt02};
            }
        }

        :nth-child(1) {
            width: 100%;
        }
    }
    
    .info03 {
        display: flex;
        flex-direction: column;
        gap: 10px;

        max-width: 1270px;
    }

    button {
        width: 300px;
        margin-right: 0;
        margin-left: auto;
    }
`;

export const Avatar = styled.div`
    width: 100%;
        
    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt01};
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    padding: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    cursor: pointer;

    label {
        cursor: pointer;
    }

    input {
        display: none;
    }

    svg > path{
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.white};
    }
`;