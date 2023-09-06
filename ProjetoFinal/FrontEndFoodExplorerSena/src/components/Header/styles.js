import { styled } from 'styled-components';

export const Container = styled.header`
    width: 100%;   
    background-color: ${({ theme }) => theme.colors.bgHeader};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding-left: 123px;
    padding-right: 123px;

    div {
        display: flex;
        width: 300px;
    }

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

`;