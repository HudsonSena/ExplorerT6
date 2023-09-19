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
    max-width: 98vw;
    height: 100%;

    padding: 0px 123px;    

    display: flex;
    flex-direction: column;
    gap: 62px;

    color: ${({ theme }) => theme.colors.txtBtn1};
    font-family: 'Poppins';

    

    > .intro {
        height: 260px;
        border-radius: 8px;
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        margin-top: 175px;
        padding: 100px;

        position: relative;
        
        > img {
            width: 632px;
            position: absolute;
            bottom: 0px;
            left: -53px;
        }

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

        position: relative;

        background: transparent;
        
        .shadowleft {
            position: absolute;
            left: 0;
            width: 20%;
            height: 100%;
            box-shadow: inset 150px 0px 150px -50px ${({theme }) => theme.colors.bgPages};

            button {
                width: 30%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        
        .shadowright {
            position: absolute;
            right: 0px;
            width: 20%;
            height: 100%;
            box-shadow: inset -150px 0px 15020px -50px  ${({theme }) => theme.colors.bgPages};

            display: flex;
            justify-content: flex-end;

            button {
                width: 30%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }   
        }

        .listFood {
            display: flex;
            flex-direction: row;
            gap: 27px;
            overflow-y: auto;
        }

        .listFood::-webkit-scrollbar {
            display: none;
        }
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