import { styled } from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 104px;    
    background-color: ${({ theme }) => theme.colors.bgHeader};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding-left: 123px;
    padding-right: 123px;
`;