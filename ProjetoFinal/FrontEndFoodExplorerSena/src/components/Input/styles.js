import styled from 'styled-components';

export const Container =  styled.div`
    width: 100%;
    
    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt};
    padding: 5px;

    > input {
        background: transparent;
        border: none;
    }
`;