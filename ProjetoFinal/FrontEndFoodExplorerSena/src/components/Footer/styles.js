import styled from 'styled-components';

export const Container = styled.div`
    grid-area: footer;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgHeader};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 123px;
    padding-right: 123px;

    color: ${({ theme }) => theme.colors.txtPlaceholder};
    
    > h2 {
        font-size: 14px;
    }

    > div {
        display: flex;
        gap: 10px;

        h1 {
            font-size: 28px;
        }
        
        svg > path {
            fill: ${({ theme }) => theme.colors.txtPlaceholder};
        }
        
    }
`;