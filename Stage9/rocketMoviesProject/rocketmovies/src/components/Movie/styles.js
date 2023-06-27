import styled from 'styled-components';

export const Container = styled.button`
    width: auto;
    
    padding: 32px;
    margin: auto;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;

    gap: 15px;

    background-color: ${({ theme }) => theme.colors.background03};

    border: none;
    border-radius: 16px;
    color: ${({ theme }) => theme.colors.white01};

    > .stars {
        display: flex;
        flex-direction: rows;
        gap: 6px;

        svg {
            width: 12px;
            height: 12px;
            color: ${({ theme }) => theme.colors.pink};
        }        
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