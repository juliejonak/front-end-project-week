import styled from 'styled-components';


//SIDEBAR

export const SideBarDiv = styled.div`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 3%;
    padding-right: 2%;
    background-color: rgb(211,210,211);
`;

export const SideBarButton = styled.button`
    width: 22vw;
    height: 5vh;
    border: 1px solid rgb(169, 187, 188);
    display: inline-block;
    text-decoration: none;
    align-self: center;
    background: rgb(0, 187, 191);
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 1.4rem;

    &:hover{
        border: 2px solid rgb(0, 187, 191);
        background: white;
        color: rgb(0, 187, 191);
    }
`;

export const Header = styled.h1`
    color: rgb(65, 65, 65);
    text-align: left;
    font-size: 3.4rem;
`;

//CREATENOTE

export const H2Header = styled.h2`
    color: rgb(65, 65, 65);
    text-align: left;
    font-size: 2.6rem;
    margin-top: 9vh;
`;

export const NoteContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 75%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 5%;
    background-color: rgb(242, 241, 242);
    flex-wrap: wrap;
`;

export const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const FormTitle = styled.input`
    width: 40vw;
    height: 4vh;
    margin: 15px 0;
    border: 2px solid rgb(214, 213, 214);
    padding-left: 1%;
`;

export const FormText = styled.input`
    width: 60vw;
    height: 35vh;
    margin-bottom: 15px;
    border: 2px solid rgb(214, 213, 214);
    padding-left: 1%;
`;

export const SubmitButton = styled.button`
    width: 22vw;
    height: 5vh;
    border: 1px solid rgb(169, 187, 188);
    display: inline-block;
    text-decoration: none;
    align-self: left;
    background: rgb(0, 187, 191);
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 1.4rem;

    &:hover{
        border: 2px solid rgb(0, 187, 191);
        background: white;
        color: rgb(0, 187, 191);
    }
`;

//NOTE

export const NoteDiv = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
    width: 28%;
    height: 200px;
    background-color: white;

    h2 {
        font-size: 1.4rem;
        margin: 3px auto 8px;
    }

    p {
        font-size: 1.2rem;
        margin: 0px 5px;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`;





