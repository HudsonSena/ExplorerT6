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

    > img {
        width: 632px;
        position: absolute;
        left: 73px;
    }

    > .intro {
        height: 260px;
        background-color: ${({ theme }) => theme.colors.bgIpt01};

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

    .listFood {
        width: 1100px;

        padding: 16px 0px;

        display: flex;
        flex-direction: row;
        gap: 27px;

        overflow: auto;

        box-shadow: -30px 0px 0px  0px black;
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

    .imgHeart {
        width: 24px;
        position: relative;
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