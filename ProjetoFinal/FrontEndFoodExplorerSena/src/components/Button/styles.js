import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding: 1.2rem 6.8rem 1.2rem 6.8rem;

    border-radius: .5rem;
    border: none;

    background-color: ${({ theme }) => theme.colors.bgBtn};
    color: ${({ theme }) => theme.colors.txtBtn1};

    font-family: 'Roboto';
    font-size: 1.4rem;

    white-space: nowrap;

    display: flex;
    align-items: center;
    gap: .8rem;

    &:disabled {
        opacity: 0.5
    }
`;