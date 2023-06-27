import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    padding-left: 24px;

    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.colors.background04};
    border: none;
    border-radius: 10px;
    
    > input {
        background: none;
        border: none;
    }

    > svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.colors.grey}; 
    }
`; 