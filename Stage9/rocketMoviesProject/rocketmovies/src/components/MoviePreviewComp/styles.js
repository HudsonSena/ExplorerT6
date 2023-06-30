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
    color: ${({ theme }) => theme.colors.white01};

    border: none;
    border-radius: 16px;    

    > .stars {
        display: flex;
        flex-direction: row;
        gap: 10px;
        scale: 1.8;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    > p {
        font-family: 'Roboto';
        color: grey;
        text-align: left;

        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }

    > footer {
        display: flex;
        flex-direction: rows;
        gap: 8px;
    }     
`;