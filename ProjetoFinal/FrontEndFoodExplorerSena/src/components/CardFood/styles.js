import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: auto;
    background-color: ${({ theme }) => theme.colors.bgCard};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    padding: 24px;
    padding-top: 0px;
    margin: auto;

    border-radius: .8rem;

    .buttonText {
        position: relative;
        right: -124px;
        top: 16px;
        z-index: 1;
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
        margin: auto;
        width: 256px;
        height: 45px;

        text-align: center;
        overflow: hidden;
        
        font-size: 14px;        
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
