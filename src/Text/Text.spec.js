import { render } from '@testing-library/react';
import Text from './Text'

describe('@component/Text', () =>{
  it('Test Text', () => {
    //arrange
    const { getByRole } = render(
      <Text component="h1" >Prueba de Text</Text>
    );
    //act
    const textTest = getByRole('heading', { name: /Prueba de Text/i });
    //assert
    expect(textTest).toBeDefined();
  })
})