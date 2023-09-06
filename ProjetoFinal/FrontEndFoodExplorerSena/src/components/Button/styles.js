import styled from 'styled-components';

export const Container = styled.button`

    margin: auto;
    padding: 10px;

    border-radius: 5px;
    border: none;

    background-color: ${({ theme }) => theme.colors.bgBtn};
    color: ${({ theme }) => theme.colors.txtBtn1};

    font-family: 'Roboto';
    font-size: larger;

    &:disabled {
        opacity: 0.5
    }
`;