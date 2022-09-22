import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import AndroidIcon from '@mui/icons-material/Android';
export default function MyItemEvolution(props: MySingleItemProperty) {
    return <MyItem path="/path" handleClose={props.handleClose} text="Azienda 4.0" icon={<AndroidIcon/>} open={props.open}/>

}