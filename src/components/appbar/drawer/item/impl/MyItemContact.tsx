import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
export default function MyItemContact(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/contatti" text="Contatti" icon={<PermContactCalendarIcon/>} open={props.open}/>
}