import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 36px;
    
    img {
        max-width: 390px;
        max-height: 390px;
    }

    .infoFood {
        width: 100%;
        display: flex;
        flex-direction: column;

        gap: 24px;

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 24px
        }

        .tagsline {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            width: 100%;
        }

        > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 24px;
            gap: 33px;

            font-size: 1.6rem;

            div {
                display: flex;
                flex-direction: row;
                gap: 14px;
            }
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