import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import SendIcon from '@mui/icons-material/Send';
export default function MyItemWebTicket(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/web-ticket" text="Web Ticket" icon={<SendIcon/>} open={props.open}/>

}