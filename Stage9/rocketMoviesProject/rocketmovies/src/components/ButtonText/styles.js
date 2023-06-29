import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.pink};    

    font-size: 16px;
    font-family: 'Roboto Slab';
`;