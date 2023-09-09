import styled from 'styled-components';

export const Container = styled.button`
    border: none;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.txtDescription};
    
    &:disabled {
        opacity: 0.5
    }
`;