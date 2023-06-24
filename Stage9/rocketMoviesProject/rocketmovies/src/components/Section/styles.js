import styled from 'styled-components';

export const Container = styled.section`
    width: auto;
    
    padding: 32px;
    margin: auto;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;

    gap: 15px;

    background-color: ${({ theme }) => theme.colors.background03};

    border-radius: 16px;
    color: ${({ theme }) => theme.colors.white01};

    > .stars {
        display: flex;
        flex-direction: rows;
        gap: 6px;
    }

    > p {
        font-family: 'Roboto';
        color: grey;
    }

    > .tags {
        display: flex;
        flex-direction: line;
        gap: 8px;
    }

     
`;