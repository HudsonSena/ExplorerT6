import styled from 'styled-components';

export const Container = styled.div`    
    width: auto;
    height: 56px;
    
    display: flex;
    align-items: center;

    padding-left: 24px;

    gap: 16px;

    background-color: ${({ theme }) => theme.colors.background04};
    
    border: none;
    border-radius: 10px;
    
    > input {
        background: none;
        border: none;
    }

    > svg {
        margin-left: -8px;
        color: ${({ theme }) => theme.colors.grey}; 
    }
`; 