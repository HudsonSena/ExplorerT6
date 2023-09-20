import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.bgTags};
    border-radius: 5px;
    padding: 4px 5px;
    white-space: nowrap;
`;