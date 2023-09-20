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
`;

export const Content = styled.main`
    grid-area: content;
    max-width: 100%;
    height: 100%;
    padding: 24px 123px;

    display: flex;
    flex-direction: column;
    gap: 42px;

    color: ${({ theme }) => theme.colors.txtDescription};
    font-family: 'Poppins';

    > .details {
        display: flex;
        flex-direction: row;
        gap: 48px;

        align-items: center;

        img {
            max-width: 390px;
            max-height: 390px;
        }

        .infoFood {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-bottom: 48px;

            h1 {
                font-size: 40px;
            }

            p {
                font-size: 24px
            }
        }
        
        section {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            width: 100%;

            .tags {
                background-color: ${({ theme }) => theme.colors.bgTags};
                border-radius: 5px;
                padding: 4px 5px;
                white-space: nowrap;
            }
        }
    }

    .voltar {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    > svg > path {
        fill: ${({ theme }) => theme.colors.txtDescription};
        font-size: 24px;
    }

    > div > button {        
        color: ${({ theme }) => theme.colors.txtDescription};
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 1px;
    }
`;