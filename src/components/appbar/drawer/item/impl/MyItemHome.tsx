import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import HomeIcon from '@mui/icons-material/Home';

export default function MyItemHome(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/" text="Home" icon={<HomeIcon/>} open={props.open}/>
}