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
    main {
        grid-area: content;
        width: 100%;
        padding: 32px 123px;
    }
`;

export const Content = styled.main`
    height: 100%;

    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 62px;

    color: ${({ theme }) => theme.colors.txtBtn1};
    font-family: 'Poppins';

    > img {
        width: 632px;
        position: absolute;
        left: 73px;
    }

    > .intro {
        height: 260px;
        width: 100%;
        margin: auto;
        border-radius: 8px;
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        margin-top: 145px;
        padding: 100px;

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 14px;
        }        
    }

    section {
        display: flex;
        flex-direction: row;
        max-width: 1090px;

        position: relative;

        .shadowleft {
            position: absolute;
            z-index: 1;
            left: 0;
            width: 80px;
            height: 480px;
            background-color: ${({ theme }) => theme.colors.bgCard};
            box-shadow: 100px 0px 10px green;

            button {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0px;
            }
        }
        
        .shadowright {
            position: absolute;
            display: flex;
            justify-content: flex-end;
            z-index: 1;
            right: 0px;
            width: 300px;
            height: 480px;
            padding-right: 28px;
            box-shadow: inset -150px 0px 150px -50px black;   
        }
    }

    .listFood {
        padding: 16px 300px;

        display: flex;
        flex-direction: row;
        gap: 27px;

        overflow: auto;        
    }

    .listFood::-webkit-scrollbar {
            display: none;
        }
`;

export const Card = styled.div`
    width: fit-content;
    height: 462px;
    background-color: ${({ theme }) => theme.colors.bgCard};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    padding: 24px;
    padding-top: 0px;

    margin: auto;

    a {
        position: relative;
        right: -124px;
        top: 16px;
    }
    

    .imgHeart {
        width: 24px;
    }

    .imgFood {
        width: 176px;
        height: 176px;
    }

    h3 {
        font-size: 24px;
    }

    p {
        font-size: 14px;
        width: 265px;
    }

    span {
        font-size: 32px;
        color: ${({ theme }) => theme.colors.txtCostAdm};
    }

    > div {
        display: flex;
        flex-direction: row;
        height: 48px;
        gap: 16px;

        align-items: center;        

        h4 {
            font-size: 20px;
        }

        .buttonIncluir{
            padding: 12px 24px;
        }
    }
`;