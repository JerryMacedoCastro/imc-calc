import React, { useEffect, useState } from 'react';

import { Container, Footer, Header, Input, Label, Main, Title } from './styles';

const Home = (): JSX.Element => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [IMC, setIMC] = useState(0);

  const validateValue = (value: number): boolean => {
    if (value <= 0) return false;
    return true;
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.valueAsNumber;
    if (validateValue(value)) setHeight(value);
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.valueAsNumber;
    if (validateValue(value)) setWeight(value);
  };

  useEffect(() => {
    if (weight !== 0 && height !== 0) {
      const result = weight / (height * height);
      setIMC(result);
    }
  }, [height, weight]);

  return (
    <Container>
      <Header>
        <Title>Calculadora IMC</Title>
      </Header>

      <Main>
        <Label> Altura </Label>
        <Input value={height} onChange={handleChangeHeight} type="number" />
        <Label> Peso </Label>
        <Input value={weight} onChange={handleChangeWeight} type="number" />
        {IMC !== 0 && height !== 0 && weight !== 0 && <p>{IMC}</p>}
      </Main>

      <Footer>
        <p>
          Desenvolvido por: <strong> Jerry Macedo Castro </strong> <br />
          <a href="mailto:jerry.castro@outlook.com">Contate-me ✉</a> <br />
          <i>Alguns direitos reservados</i>
        </p>
      </Footer>
    </Container>
  );
};

export default Home;
