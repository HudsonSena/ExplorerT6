import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: auto;
    
    padding: 32px;
    margin: auto;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;

    gap: 15px;

    background-color: ${({ theme }) => theme.colors.background03};
    color: ${({ theme }) => theme.colors.white01};

    border: none;
    border-radius: 16px;    

    > .stars {
        display: flex;
        flex-direction: rows;
        gap: 6px;       
    }

    > p {
        font-family: 'Roboto';
        color: grey;
        text-align: left;
    }

    > footer {
        display: flex;
        flex-direction: rows;
        gap: 8px;
    }     
`;