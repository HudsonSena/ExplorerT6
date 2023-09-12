import { styled } from 'styled-components';

export const Container = styled.header`
    width: 100%;   
    background-color: ${({ theme }) => theme.colors.bgHeader};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;

    padding: 10px 123px;

    .adminOn {
        display: none;
    }    

    > div {
        display: flex;
        gap: 10px;
        min-width: 210px;

        h1 {
            font-size: 28px;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            line-height: 1;
        }

        span {
            color: ${({ theme }) => theme.colors.txtCostAdm};
        }
    }

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > a {
        color: white;
        font-size: 22px;
    }
`;