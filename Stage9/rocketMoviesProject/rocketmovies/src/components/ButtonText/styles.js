import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    margin: auto;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.pink};    

    font-size: 16px;
    font-family: 'Roboto Slab';
`;