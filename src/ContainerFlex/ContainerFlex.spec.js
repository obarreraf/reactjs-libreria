import { render } from '@testing-library/react'
import ContainerFlex from './ContainerFlex'

describe('@components/ContainerFlex', ()=> {
    it('mensaje', ()=> {
        // arrange
        const { getByRole } = render(
            <ContainerFlex bgcolor="red" justifyContent="center" role="banner" />
        )
        
        // act 
        const ContainerFlexTest = getByRole('banner')

        // assert
        expect(ContainerFlexTest).toBeDefined();

    })
})