import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import MyCardProperty from "./MyCardProperty";

export default function MyCard(props: MyCardProperty) {
    return <Card>
    <CardMedia component="img" height="250" image={props.logo} alt={props.title}/>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography variant="body2" minHeight={120} color="text.secondary">
           {props.descr}
        </Typography>
        {props.subDescr != null ? <Typography variant="body2" color="text.secondary">
           {props.subDescr}
        </Typography> : <></>}
    </CardContent>
    <CardActions>
        {props.path != null ? <Link to={props.path}>
            <Button size="small">Scopri di più</Button>
        </Link> : <></>}
    </CardActions>
</Card>
}