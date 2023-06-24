import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.colors.pink};

    display: flex;
    flex-direction: row;

    border-radius: 8px;

    
    padding: 14px 32px;
    align-items: center;

    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }

    > svg {
        width: 32px;
        height: 32px;
    }
`;