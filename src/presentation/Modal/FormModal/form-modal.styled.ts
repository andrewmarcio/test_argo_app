import { Card, Modal } from "@ui-kitten/components";
import { View } from "react-native";
import styled from "styled-components";

const ModalConTainer = styled(Modal)`
    width: 90%;
    min-height: 350px;
    /* flex: 1; */
    justify-content: center;
    gap: 12px;
`

const CardModal = styled(View)`
   flex-grow: 1;
   flex-direction: column;
   background-color: #1A2138;
   justify-content: space-between;
   padding: 12px;
   border-radius: 12px;
   
`

const Row = styled(View)`
    gap: 8px;
    flex-direction: row;
    justify-content: space-between;
`
export { ModalConTainer, Row, CardModal }