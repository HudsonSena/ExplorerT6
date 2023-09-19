import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;

export const Content = styled.main`
    grid-area: content;
    max-width: 98vw;
    height: 100%;

    padding: 20px 123px;    

    display: flex;
    flex-direction: column;
    gap: 62px;

    color: ${({ theme }) => theme.colors.txtBtn1};
    font-family: 'Poppins';

    

    > .intro {
        height: 260px;
        border-radius: 8px;
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        margin-top: 175px;
        padding: 100px;

        position: relative;
        
        > img {
            width: 632px;
            position: absolute;
            bottom: 0px;
            left: -53px;
        }

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 14px;
        }        
    }

    > section {
        display: flex;
        flex-direction: row;

        position: relative;

        background: transparent;
        
        .shadowleft {
            position: absolute;
            left: 0;
            width: 250px;
            height: 100%;
            box-shadow: inset 150px 0px 150px -50px ${({theme }) => theme.colors.bgPages};

            button {
                width: 30%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        
        .shadowright {
            position: absolute;
            right: 0px;
            width: 250px;
            height: 100%;
            box-shadow: inset -150px 0px 15020px -50px  ${({theme }) => theme.colors.bgPages};

            display: flex;
            justify-content: flex-end;

            button {
                width: 30%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }   
        }

        .listFood {
            display: flex;
            flex-direction: row;
            gap: 27px;
            overflow-y: auto;
        }

        .listFood::-webkit-scrollbar {
            display: none;
        }
    }
    
`;