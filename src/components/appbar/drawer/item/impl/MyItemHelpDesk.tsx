import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import TtyIcon from '@mui/icons-material/Tty';
export default function MyItemHelpDesk(props: MySingleItemProperty) {
    return <MyItem path="/help-desk" handleClose={props.handleClose} text="Help Desk" icon={<TtyIcon/>} open={props.open}/>
}