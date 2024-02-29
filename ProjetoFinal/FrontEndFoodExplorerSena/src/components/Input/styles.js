import styled from 'styled-components';

export const Container =  styled.div`
    width: 100%;

    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt01};
    border-radius: .5rem;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    padding: 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > input {
        width: 100%;
        height: 100%;
        background: transparent;
        color: ${({ theme }) => theme.colors.txtPlaceholder};
        padding-left: 1rem;

        border: none;

        font-family: 'Roboto';
        font-size: 1.6rem;
    }
`;