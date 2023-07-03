import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.colors.background03};
        
        display: flex;
        padding-left: 144px;
    }

    > header .btnback {
        margin-left: 0;
    }
`;

export const Form = styled.form`
    width: 340px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 24px;

    margin: auto;

    > div {
        display:flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -94px auto 64px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.pink};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.colors.background01};
        }
    }
    
`;