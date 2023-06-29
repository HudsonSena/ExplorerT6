import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";


    > main {
        margin: 40px 10%;
        display: flex;
        flex-direction: column;
        gap: 24px;

        h1 {
            color: ${({ theme }) => theme.colors.white01};
        }

    }
`;

export const Form = styled.form`
    width: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    > div {
        display: flex;
        gap: 40px;
    }

    > h2 {
        color: ${({ theme }) => theme.colors.grey};
    }
`;