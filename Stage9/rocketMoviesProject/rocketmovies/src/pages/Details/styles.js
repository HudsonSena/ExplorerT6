import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    justify-content: center;
    align-items:center;

    

    > main {
        grid-area: content;

        width: ;
        height: ;
        padding: 123px 50px;

        .h1button {
            display: flex;
            flex-direction: rows;

            justify-content: space-between;
            align-items: center;

            h1 {
                color: white;
            }

            Button {
                width: 200px;
            }
        }
    }
`;

export const Content = styled.div`
    grid-area: "content";
    width: 100%;
    height: 100vh;
    overflow: auto;
`;