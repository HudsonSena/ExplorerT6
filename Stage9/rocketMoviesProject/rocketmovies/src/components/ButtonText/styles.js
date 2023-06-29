import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    margin: auto;

    background: none;

    color: ${({ theme }) => theme.colors.pink};

    border: none;

    font-size: 16px;
    font-family: 'Roboto Slab';
`;