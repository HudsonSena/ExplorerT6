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
    width: 100%;
    height: 100%;
    padding: 24px 123px 24px 123px;

    display: flex;
    flex-direction: column;
    gap: 62px;

    color: ${({ theme }) => theme.colors.txtBtn1};
    font-family: 'Poppins';
`;