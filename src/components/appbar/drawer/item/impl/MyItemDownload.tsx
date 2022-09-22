import MyItem from "../MyItem";
import { MySingleItemProperty } from "../MyItemProperty";
import DownloadIcon from '@mui/icons-material/Download';
export default function MyItemDownload(props: MySingleItemProperty) {
    return <MyItem handleClose={props.handleClose} path="/download" text="Download" icon={<DownloadIcon/>} open={props.open}/>

}