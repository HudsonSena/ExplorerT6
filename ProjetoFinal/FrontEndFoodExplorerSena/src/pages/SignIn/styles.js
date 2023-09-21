import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 123px;

    background-color: ${({ theme }) => theme.colors.bgPages};

    > div {
        display: flex;
        flex-direction: row;
        gap: 20px;

        align-items: center;

        font-family: 'Roboto';

        h1 {
            font-size: 42px;
        }

        svg {
            width: 50px;
            height: 50px;
        }
    }
`;

export const Form = styled.form`
    padding: 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 32px;

    font-family: 'Poppins';

    background-color: ${({ theme }) => theme.colors.bgForm};    

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
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
    }
`;