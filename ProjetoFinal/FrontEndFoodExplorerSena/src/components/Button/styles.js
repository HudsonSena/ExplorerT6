import styled from 'styled-components';

export const Container = styled.button`
    width: auto;
    padding: 12px 68px 12px 68px;

    border-radius: 5px;
    border: none;

    background-color: ${({ theme }) => theme.colors.bgBtn};
    color: ${({ theme }) => theme.colors.txtBtn1};

    font-family: 'Roboto';
    font-size: larger;

    white-space: nowrap;

    &:disabled {
        opacity: 0.5
    }
`;