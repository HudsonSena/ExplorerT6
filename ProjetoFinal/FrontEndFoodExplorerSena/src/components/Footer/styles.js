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
`;