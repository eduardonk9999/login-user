import  styled from 'styled-components';

export const Container = styled.div`
  h1{
    margin: 10px 0 33px 0;
  }

  max-width: 114rem;
  width: 80%;
  margin: 80px auto 40px auto;
  background: #FFF;
  height: 500x;
  border-radius: 20px;
  padding: 3rem;

  display: flex;
  justify-content: space-between;
 

  img{
    width: 60%;
    height: auto;
    max-width: 100%;
    height: fit-content;
  }
`;

export const Form = styled.form`
  margin: 50px 0 0 0;
  width: 35%;
  transform: translateY(70px);
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    margin: 22px 0 10px 10px;
    display: block;
  }
  input {
    background: #fff;
   
    width: 100%;
    height: 2.5rem;
    padding: 1px 10px;
    border: 1px solid #BCBEC0;
    border-radius: 40px;
  }
  button{
    max-width: 40rem;
    width: 100%;
    height: 2.5rem;
    display: block;
    background: #A93159;
    border: 0;
    color: #fff;
    font-weight: bold;
    margin-top: 30px;
    border-radius: 40px;
  }
`;