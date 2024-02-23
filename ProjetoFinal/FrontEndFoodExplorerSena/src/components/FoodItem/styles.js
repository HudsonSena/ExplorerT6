import styled from 'styled-components';

export const Container = styled.div`
    max-width: 25rem;
    min-width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, isNew }) => isNew ? `.1rem solid ${({ theme }) => theme.colors.txtPlaceholder}` : theme.colors.txtPlaceholder};
    
    color: ${({ theme }) => theme.colors.txtBtn1};

    border: ${({ theme, isNew }) => isNew ? `.1rem dashed ${ theme.colors.txtPlaceholder}` : `1px solid ${ theme.colors.txtPlaceholder}`};
    border-radius: .5rem;

    padding-right: .8rem;

    > button {
        max-width: .1rem;
        font-size: 1.6rem;
        background: none;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        color: ${({ theme }) => theme.colors.txtBtn1};
        background: transparent;

        border: none;

        padding: 1.2rem;

        font-size: 1.6rem;
        font-family: 'Roboto';

        &::placeholder {
            color: ${({ theme }) => theme.colors.txtPlaceholder};
        }
    }    
`;