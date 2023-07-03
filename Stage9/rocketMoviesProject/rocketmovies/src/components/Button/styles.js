import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.background02};

    display: flex;
    flex-direction: row;

    border: none;
    border-radius: 8px;
    
    padding: 14px 32px;
    align-items: center;
    justify-content: center;

    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        width: 32px;
        height: 32px;
    }
`;