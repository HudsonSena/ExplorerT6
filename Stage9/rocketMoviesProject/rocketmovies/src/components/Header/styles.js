import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;

    padding: 0 123px;
    
    > h1 {
        color: ${({ theme }) => theme.colors.pink};
    }

    > Input {
        width: 630px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

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