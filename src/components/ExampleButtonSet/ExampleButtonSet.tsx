import React, { useState } from 'react';
import * as S from './Style';

type ExampleButtonSetProps<T> = {
  buttonList: T[];
  onClick: (selected: T) => void;
};
function ExampleButtonSet<T>({
  buttonList,
  onClick,
}: ExampleButtonSetProps<T>) {
  const [selected, setSelected] = useState(buttonList[0]);
  const handleClick = (selected: T) => {
    setSelected(selected);
    onClick(selected);
  };
  return (
    <S.Container>
      {buttonList.map((button) => (
        <S.Button
          key={button as unknown as string}
          isSelected={selected == button}
          onClick={() => handleClick(button)}
        >
          {button}
        </S.Button>
      ))}
    </S.Container>
  );
}

export default ExampleButtonSet;
