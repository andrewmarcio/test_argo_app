import { List, ListItem as ListItemKitten } from "@ui-kitten/components";
import { View } from "react-native";
import styled from "styled-components";

const ListContainer = styled(List)`
    flex: 1;
`

const ListItem = styled(ListItemKitten)`
    height: 80px;
`

const TextContainer = styled(View)`
    flex: 1;
    align-items: start;
    justify-content: center;
`

const ButtonGroup = styled(View)`
    flex-direction: row;
    gap: 8px;
`

export {
    ListContainer,
    ListItem,
    TextContainer,
    ButtonGroup
}