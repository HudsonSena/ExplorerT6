import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;

    height: 100px;
    
    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt02};
    border-radius: 5px;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    padding: 14px;

    font-family: 'Roboto';
    font-size: 16px;
`;