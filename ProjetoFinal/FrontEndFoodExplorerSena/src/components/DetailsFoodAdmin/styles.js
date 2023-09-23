import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;

    img {
        max-width: 39rem;
        max-height: 39rem;
    }

    .infoFood {
        width: 100%;
        display: flex;
        flex-direction: column;

        gap: 2.4rem;

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 2.4rem;
        }

        .tagsline {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            width: 100%;
        }

        > div {
            display: flex;
            align-items: center;
            margin-top: 2.4rem;
        }

        button {
            width: auto;
        }
    }

    @media (max-width: 920px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 26rem;
            height: 26rem;
        }

        .infoFood {
            align-items: center;

            p {
                text-align: center;
            }
            .tagsline {
                flex-wrap: wrap;
                gap: none;
                justify-content: space-evenly;
            }            
        }

        .btnEdit {
            width: 100%;

            button {
                width: 100%
            }
        }
    }
`;