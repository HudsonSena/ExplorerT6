import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    justify-content: center;
    align-items:center;
`;

export const Content = styled.div`
    grid-area: "content";
    width: 80%;
    margin: auto;
    margin-top: 47px;

    > .h1button {
        display: flex;
        flex-direction: rows;

        justify-content: space-between;
        align-items: center;

        margin-bottom: 40px;

        h1 {
            color: white;
        }

        Button {
            width: 200px;
        }
    }

    > main {
        height: 60vh;
        margin: auto;
        padding-right: 8px;
        overflow-y: auto;
    }

    > main::-webkit-scrollbar {
        width: 8px;
    }
    
    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme })=> theme.colors.pink};
        border-radius: 8px;
    }

`;