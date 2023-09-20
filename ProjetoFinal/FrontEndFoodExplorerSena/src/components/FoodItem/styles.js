import styled from 'styled-components';

export const Container = styled.div`
    max-width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, isNew }) => isNew ? `1px solid ${({ theme }) => theme.colors.txtPlaceholder}` : theme.colors.txtPlaceholder};
    
    color: ${({ theme }) => theme.colors.txtBtn1};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.colors.txtPlaceholder}` : `1px solid ${ theme.colors.txtPlaceholder}`};
    border-radius: 8px;

    padding: 8px;
    padding-left: 16px;
    padding-right: 0;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.colors.txtBtn1};
        display: flex;
    }

    .button-add {
        color: ${({ theme }) => theme.colors.txtPlaceholder};
        display: flex;
    }

    input {
        color: ${({ theme }) => theme.colors.txtBtn1};
        background: transparent;

        border: none;

        font-size: 16px;
        font-family: 'Roboto';

        &::placeholder {
            color: ${({ theme }) => theme.colors.txtPlaceholder};
        }
    }    
`;