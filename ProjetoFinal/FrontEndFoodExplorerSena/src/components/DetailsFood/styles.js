import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
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
`;