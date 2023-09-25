import { styled } from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    .menuclassic {
        width: 100%;
        height: 10.4rem;
        background-color: ${({ theme }) => theme.colors.bgHeader};

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3.2rem;

        padding: 1rem 12.3rem;
        
        position: fixed;

        z-index: 2;

        button {
            width: auto;
        }

        > div {
            display: flex;
            gap: 1rem;
            min-width: 21rem;

            h1 {
                font-size: 2.8rem;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                line-height: 1;
            }

            span {
                color: ${({ theme }) => theme.colors.txtCostAdm};
                font-size: 1.2rem;
            }
        }

        > img {
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 50%;
        }

        > a {
            color: ${({ theme }) => theme.colors.txtBtn1};
            font-size: 2.2rem;
            display: flex;
            align-items: center;
        }

        @media (max-width: 920px) {
            display: none;
        }
    }
    
    .menuburguer {
        width: 100%;
        height: 11.4rem;
        background-color: ${({ theme }) => theme.colors.bgHeader};

        a {
            color: ${({ theme }) => theme.colors.txtBtn1};
            font-family: 'Roboto';
            font-size: 2.1rem;
        }

        div {
            display: flex;
            flex-direction: column;

            input {
                width: 100%;
            }
        }

        .menulist {
            width: 100%;
            height: auto;
            margin-top: .8rem;
            padding: 2.8rem;

            position: absolute;

            display: flex;
            flex-direction: column;
            gap: 3.6rem;

            background-color: ${({ theme }) => theme.colors.bgPages};

            div {
                display: flex;
                flex-direction: row;

                margin: auto;
                gap: 1rem;
            }

            a {
                font-family: 'Poppins';
                font-size: 2.4rem;
                font-weight: 200;

                border-bottom: .05rem solid ${({ theme}) => theme.colors.bgIpt01};

                padding: 1rem;
            }
            
            
        }
    }
    

    @media (max-width: 920px) {

    }
`;