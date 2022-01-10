import React, { useState } from 'react';
import styled from 'styled-components';
import ExampleButtonSet from '../../components/ExampleButtonSet/ExampleButtonSet';

enum Example {
  NOT_OPTIMIZED = '최적화 안됨',
  WITH_MEMO = 'Memo 사용',
  MOVE_STATE_DOWN = 'State 위치 조정',
}

function BeforeUseMemoPage() {
  const [example, setExample] = useState<Example>(Example.NOT_OPTIMIZED);
  return (
    <Container>
      <ExampleButtonSet<Example>
        buttonList={Object.values(Example)}
        onClick={setExample}
      />
      {example === Example.NOT_OPTIMIZED ? (
        <ExampleNotOptimized />
      ) : example === Example.WITH_MEMO ? (
        <ExampleWithMemo />
      ) : (
        <ExampleWithStateDown />
      )}
    </Container>
  );
}

export default BeforeUseMemoPage;

const HeavyComponent = () => {
  for (let i = 0; i < 99999999; i++);
  return <h1 style={{ color: 'white' }}>Heavy Component</h1>;
};

const ExampleNotOptimized = () => {
  const [color, setColor] = useState('#000000');
  return (
    <>
      <ColorBox style={{ backgroundColor: color }}>
        <HeavyComponent />
      </ColorBox>
      <Input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
};

const HeavyComponentWithMemo = React.memo(HeavyComponent);

const ExampleWithMemo = () => {
  const [color, setColor] = useState('#000000');
  return (
    <>
      <ColorBox style={{ backgroundColor: color }}>
        <HeavyComponentWithMemo />
      </ColorBox>
      <Input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
};

const ExampleWithStateDown = () => {
  return (
    <ColorBoxWithInput>
      <HeavyComponent />
    </ColorBoxWithInput>
  );
};

const ColorBoxWithInput = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('#000000');
  return (
    <>
      <ColorBox style={{ backgroundColor: color }}>{children}</ColorBox>
      <Input type="color" onChange={(e) => setColor(e.target.value)} />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorBox = styled.div`
  padding: 40px 20px;
`;

const Input = styled.input`
  margin-top: 10px;
`;
