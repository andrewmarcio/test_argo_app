import { List, ListItem as ListItemKitten } from "@ui-kitten/components";
import { Text, View } from "react-native";
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

export {
    ListContainer,
    ListItem,
    TextContainer
}