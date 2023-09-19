import styled from 'styled-components';

export const Container = styled.div`
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

    cursor: pointer;
    

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
