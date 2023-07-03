import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";   
`;

export const Content = styled.div`
    width: 80%;
    margin: auto;
    
    > .btnback {
        margin-bottom: 24px;
    }

    > main {
        height: 600px;
        padding: 0 8px 8px 0;

        display: flex;
        flex-direction: column;
        gap: 24px;

        overflow-y: auto;

        h1 {
            color: ${({ theme }) => theme.colors.white01};
        }
    }

    > main::-webkit-scrollbar {
            width: 8px;
        }
        
    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme })=> theme.colors.pink};
        border-radius: 8px;
    }
`;

export const Form = styled.form`
    width: 100%;

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

    > .marcadores {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.background05};

        border-radius: 8px;

        display: flex;
        gap: 24px;

        padding: 16px;
    }

    > div .deletefilme {
        background-color: ${({ theme }) => theme.colors.background05};
        color: ${({ theme }) => theme.colors.pink};
    }
`;