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

            div {
                display: flex;
                flex-direction: row;
                gap: 14px;
            }
        }
    }
    
        
`;