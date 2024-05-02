import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    height: auto;
    background-color: ${({ theme }) => theme.colors.bgCard};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    padding: 24px;
    padding-top: 0px;
    margin: auto;

    .btnEdit {
        position: relative;
        right: -124px;
        top: 16px;
    }

    .btnEdit:hover {
        scale: 1.1;
    }

    .imgFood {
        width: 176px;
        height: 176px;
        object-fit: contain;
    }

    .btnDetails {
        font-size: 24px;
    }

    .btnDetails:hover {
        scale: 1.1;
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

    div {
        display: flex;
        flex-direction: row;
        height: 48px;
        gap: 16px;

        align-items: center;        

        h4 {
            font-size: 20px;
        }
    }
`;
