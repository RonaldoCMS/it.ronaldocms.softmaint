import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import TerminalIcon from '@mui/icons-material/Terminal';
export default function MyItemSoftware(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/software" text="Software" icon={<TerminalIcon/>} open={props.open}/>

}