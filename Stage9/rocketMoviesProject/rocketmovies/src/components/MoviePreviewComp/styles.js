import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 40px;

    background: none;
    color: ${({ theme }) => theme.colors.white01};

    border: none;

    > div {
        display: flex;
        align-items: center;
        gap: 19px;
    }

    > div .stars {
        display: flex;
        flex-direction: row;
        gap: 10px;

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