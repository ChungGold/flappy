import { Carousel } from './components/Carousel'
import styled from 'styled-components'

const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const App = () => {
    return (
        <Container>
            <Carousel />
        </Container>
    )
}
