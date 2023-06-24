import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 64px;

    padding: 24px 123px;
    
    > h1 {
        color: ${({ theme }) => theme.colors.pink};
    }
`;

export const Profile = styled.div`
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 9px;

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: white;

        a {
            text-decoration: none;
            color: grey;
        }
    }
`;