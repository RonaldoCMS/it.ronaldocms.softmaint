import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
export default function MyItemWho(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/chi-siamo" text="Chi siamo" icon={<QuestionMarkIcon/>} open={props.open}/>

}