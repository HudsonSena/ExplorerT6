import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    padding: 12.3rem;

    background-color: ${({ theme }) => theme.colors.bgPages};

    > div {
        display: flex;
        flex-direction: row;
        gap: 2.0rem;

        align-items: center;
        justify-content: center;

        font-family: 'Roboto';

        h1 {
            font-size: 4.2rem;
        }

        svg {
            width: 5.0rem;
            height: 5.0rem;
        }
    }

    @media (max-width: 920px){
        display: flex;
        flex-direction: column;
        align-content: space-evenly;
        padding: 5.0rem;
    }    
`;

export const Form = styled.form`
    padding: 3.2rem 6.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3.2rem;

    font-family: 'Poppins';

    background-color: ${({ theme }) => theme.colors.bgForm};

    h2 {
        font-size: 3.2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    label {
        font-size: 1.6rem;
    }
    
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input {
        text-align: left;
    }

    button {
        width: 100%;
    }

    a {
        color: ${({ theme }) => theme.colors.txtLogo};
        font-size: 1.6rem;
    }

    @media (max-width: 920px){
        background: none;
        padding: 0;
        
        h2{
            display: none;
        }
    }
`;