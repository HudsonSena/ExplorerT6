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
    width: 100%;
    height: 100%;
    padding: 2.4rem 12.3rem 2.4rem 12.3rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    color: ${({ theme }) => theme.colors.txtDescription};
    font-family: 'Poppins';

    a {
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

    @media (max-width: 920px) {
        padding: 3.2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    gap: 3.2rem;

    font-family: 'Poppins';

    label {
        font-size: 1.6rem;
    }

    input {
        text-align: left;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .newTags {
        width: 100%;
        padding: .8rem;

        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        border-radius: .5rem;

        background-color: ${({ theme }) => theme.colors.bgIpt02};
    }

    .info01 {
        display: flex;
        flex-direction: row;
        gap: 3.2rem;

        > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                background-color: ${({ theme }) => theme.colors.bgIpt02};
            }
        }
    }

    .info02 {
        display: flex;
        flex-direction: row;
        gap: 3.2rem;

        > div {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                background-color: ${({ theme }) => theme.colors.bgIpt02};
            }
        }

        :nth-child(1) {
            width: 75%;
        }

        :nth-child(2) {
            min-width: 25%;
        }
    }
    
    .info03 {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        max-width: 127rem;
    }

    .deleteUpdate {
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-items: flex-end;
        gap: 1rem;
        margin-left: auto;
    }

    #deleteFood {
        background-color: ${({ theme }) => theme.colors.bgIpt01};

        width: 100%;
        font-family: 'Roboto';
        font-size: 1.4rem;

        white-space: nowrap;
    }

    #addFood {
        width: auto;
        font-family: 'Roboto';
        font-size: 1.4rem;

        white-space: nowrap;
    }

    @media (max-width: 920px) {
        .info01, .info02, .info03 {
            flex-direction: column;

            width: 100%;            
        }

        .info02 {
            :nth-child(1) {
                width: 100%;
            }
        }

        .deleteUpdate {
            width: 100%;
            padding: auto;
            justify-content: space-evenly;
        }
    }
`;

export const Avatar = styled.div`
    width: 100%;
        
    border: none;
    background-color: ${({ theme }) => theme.colors.bgIpt01};
    border-radius: .5rem;

    color: ${({ theme }) => theme.colors.txtPlaceholder};

    padding: 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    cursor: pointer;

    label {
        cursor: pointer;
    }

    input {
        display: none;
    }

    svg > path{
        width: 2rem;
        height: 2rem;
        fill: ${({ theme }) => theme.colors.white};
    }
`;