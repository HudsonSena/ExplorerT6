import styled from 'styled-components';

export const Container = styled.button`
    background: none;

    color: ${({ theme }) => theme.colors.pink};

    border: none;

    font-size: 16px;
    font-family: 'Roboto Slab';
`;