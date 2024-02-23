import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, isNew }) => isNew ? `1px solid ${({ theme }) => theme.colors.txtPlaceholder}` : theme.colors.txtPlaceholder};
    
    color: ${({ theme }) => theme.colors.txtBtn1};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.colors.txtPlaceholder}` : `1px solid ${ theme.colors.txtPlaceholder}`};
    border-radius: 8px;

    padding-right: .8rem;

    > button {
        width: 5px;
        font-size: 16px;
        background: none;

        display: flex;
        align-items: center;
    }

    input {
        color: ${({ theme }) => theme.colors.txtBtn1};
        background: transparent;

        border: none;

        padding: .8rem 1.6rem;

        font-size: 16px;
        font-family: 'Roboto';

        &::placeholder {
            color: ${({ theme }) => theme.colors.txtPlaceholder};
        }
    }    
`;