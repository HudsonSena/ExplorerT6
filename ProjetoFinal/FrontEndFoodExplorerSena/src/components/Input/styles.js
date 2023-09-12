import styled from 'styled-components';

export const Container =  styled.div`
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

    > input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;

        font-family: 'Roboto';
        font-size: 16px;
        text-align: center;
    }
`;