import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    > main {
        grid-area: "content";
    }
`;

export const Content = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
    padding: 24px 123px;

    display: flex;
    flex-direction: column;
    gap: 42px;

    color: ${({ theme }) => theme.colors.txtDescription};
    font-family: 'Poppins';

    > div {
        display: flex;
        flex-direction: row;
        gap: 48px;

        align-items: center;

        .infoFood {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 48px;
        }

        .tags {
            background-color: ${({ theme }) => theme.colors.bgTags};
            border-radius: 5px;
            padding: 4px 5px;
            white-space: nowrap;
        }

        img {
            width: 390px;
            height: 390px;
        }

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 24px
        }

        section {
            display: flex;
            flex-direction: row;
            gap: 12px;
        }
    }

    > a, svg > path {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        
        color: ${({ theme }) => theme.colors.txtDescription};
        fill: ${({ theme }) => theme.colors.txtDescription};
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 1px;
    }
`;