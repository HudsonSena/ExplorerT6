import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.colors.background04};

    color: ${({ theme, isNew }) => isNew ? theme.colors.grey : theme.colors.white01};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.colors.grey }`: "none"};

    border-radius: 10px;

    > button {
        border: none;
        background: none;

        display: flex;
        align-items:center;

        color: ${({ theme }) => theme.colors.pink};
    }

    > input {
        font-size: 16px;

        color: ${({ theme }) => theme.colors.white01};
        background: transparent;
        
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.grey};
        }
    }

    
`;