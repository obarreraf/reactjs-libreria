import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {
  it("Prueba de Imagen", () => {
    //arrange
    const { getByRole } = render(
      <MediaImg alt="TituloImg" src="http://www.cool.com/img" />
    );
    //act
    const MediaImgTest = getByRole('img')
    //assert
    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute("src", "http://www.cool.com/img")
    expect(MediaImgTest).toHaveAttribute("alt", "TituloImg" )
  })
})