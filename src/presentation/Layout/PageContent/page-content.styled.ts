import { Layout } from "@ui-kitten/components";
import { View } from "react-native";
import styled from "styled-components";
import { InputSearch as InputSearchComponent, Button as ButtonComponent } from '@presentation/Components'

const Container = styled(Layout)`
    flex: 1;
    gap: 8px;
`
const Header = styled(View)`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;

    gap: 4px;
`

const Content = styled(View)`
    flex: 1;
`

const Row = styled(View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
`

const Input = styled(InputSearchComponent)`
    flex-grow: 1;
`

const Button = styled(ButtonComponent)`
    height: 32px;
    width: 32px;
`

export { Container, Content, Header, Row, Input, Button }