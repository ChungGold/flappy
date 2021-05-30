import styled from 'styled-components'

const Map = styled.div`
    height: 100%;
    width: 100%;

    background-color: cyan;
`

const Wall = styled.div`
    height: 70%;
    width: 5%;

    background-color: red;
    position: absolute;
    bottom: 0;
`

const Char = styled.div`
    height: 100px;
    width: 100px;
    background-color: yellow;
`

export { Map, Wall, Char }