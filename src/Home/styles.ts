import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh + 4rem);
  margin: 0 auto;
  width: 98vw;
`;

export const Header = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.h1`
  font-size: 24;
`;

export const Footer = styled.footer`
  margin-top: 100vh;
  background: lightgray;
  padding: 3rem 0;
  height: 4rem;
  width: 100%;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  width: 60vw;
  padding: 1rem;
  margin-top: 4rem;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 96%;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.1s;
`;

export const Button = styled.button`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  margin-top: 1rem;
  border-radius: 0.4rem;
  background: darkgreen;
  color: white;
`;

export const Label = styled.div`
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;
