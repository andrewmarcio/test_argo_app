import { Button } from "@ui-kitten/components";
import styled from "styled-components";

const BaseButton = styled(Button) <{ fullWidth?: boolean }> `
    height: 100%;
    ${({ fullWidth }) => fullWidth ? "flex-grow: 1;" : ""};
`

export { BaseButton }