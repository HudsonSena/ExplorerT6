import { styled } from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    padding: 5px 16px;

    color: ${({ theme })=> theme.colors.white03};
    background-color: ${({ theme })=> theme.colors.background04};

    border-radius: 8px;

    text-align: center;
    font-family: 'Roboto';
    font-weight: 400;
`;
