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
            color: ${({ theme }) => theme.colors.pink};
        }
    }

    > p {
        font-family: 'Roboto';
        color: ${({ theme }) => theme.colors.white03};

        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }
    }

    > footer {
        display: flex;
        flex-direction: rows;
        gap: 8px;

        span {
            background: ${({ theme }) => theme.colors.background03};
        }
    }     
`;