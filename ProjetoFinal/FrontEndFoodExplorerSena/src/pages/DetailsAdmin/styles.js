import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.4rem auto 7.7rem;
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
    padding: 2.4rem 12.3rem;

    display: flex;
    flex-direction: column;    
    gap: 4.2rem;

    color: ${({ theme }) => theme.colors.txtDescription};
    font-family: 'Poppins';

    a {
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        font-size: 2.4rem;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.txtBtn1}
    }

    > svg > path {
        fill: ${({ theme }) => theme.colors.txtDescription};
        font-size: 2.4rem;
    }

    > div > button {        
        color: ${({ theme }) => theme.colors.txtDescription};
        font-weight: bold;
        font-size: 2.4rem;
        letter-spacing: .1rem;
    }

    @media (max-width: 920px){
        padding: 5.6rem;
        align-content: space-evenly;
    }
`;