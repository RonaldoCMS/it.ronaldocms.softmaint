import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { MyItemProperty } from "./MyItemProperty";

export default function MyItem(props: MyItemProperty) {
    return <Link style={{
      textDecoration: "none",
      color: "black",
      cursor: "pointer"
    }} to={props.path}
    onClick={props.handleClose}
    >  <ListItem disablePadding sx={{ display: 'block' }}>
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: props.open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: props.open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
       {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} sx={{ opacity: props.open ? 1 : 0 }} />
    </ListItemButton>
  </ListItem>
  </Link>
} 