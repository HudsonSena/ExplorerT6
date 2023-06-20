import styled from 'styled-components';

export const Container = styled.input`
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 19px 24px;

    width: auto;
    height: 56px;

    background-color: ${({ theme }) => theme.colors.background04};
    border: none;
    border-radius: 10px;

    color: green;
`; 