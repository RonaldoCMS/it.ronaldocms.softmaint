import {CardContent} from "@mui/material";
import {CardActions} from "@mui/material";
import {Grid} from "@mui/material";
import {Button} from "@mui/material";
import {Typography} from "@mui/material";
import {CardMedia} from "@mui/material";
import {Card} from "react-bootstrap";
import MyCard from "../components/card/MyCard";
import MyCardProperty from "../components/card/MyCardProperty";
import arcaLogo from "./../assets/software/arca.jpg";
import bPointLogo from "./../assets/software/bpoint.jpg";
import genyaLogo from "./../assets/software/genya.jpg";
import giottoLogo from "./../assets/software/giotto.jpg";

const cards: MyCardProperty[] = [
    {
        descr: "La soluzione ERP che si modella sulla tua azienda, favorendone la crescita e la competitività, perché le grandi imprese si fanno insieme!",
        logo: arcaLogo,
        path: "/software/arca",
        title: "Arca"
    },
    {
        descr: "Lo Studio al centro: la piattaforma unica con tutte le soluzioni per lo Studio professionale. La soluzione pensata per migliorare l'operatività e la comunicazione con i clienti: uno strumento in grado di guidare il lavoro quotidiano e renderlo più veloce ed efficiente.",
        logo: bPointLogo,
        path: "/software/bpoint",
        title: "BPoint"
    },
    {
        descr: "Il software in cloud con il Cliente al centro: condivisio0ne di dati e informazioni, analisi e report avanzati con un'interfaccia chiara e innovativa. Più produttività con una gestione delle attività contabili e discali semplificata. Più veloce con un'unica soluzione per la condivisione di report e documenti con colleghi e clienti. Più tempo da dedicare alla consulenza strategica.",
        logo: genyaLogo,
        path: "/software/genya",
        title: "Genya"
    },
    {
        descr: "La soluzione paghe integrata, semplice ed affidabile per l'amministrazione e gestione del personale. Ideale perché semplice e pronta all'uso, veloce e sempre aggiornata in automatico.",
        logo: giottoLogo,
        path: "/software/giotto",
        title: "Giotto"
    },
]

export default function SoftwarePage() {
    return <>
        <Grid container
            rowSpacing={1}
            columnSpacing={
                {
                    xs: 1,
                    sm: 2,
                    md: 1
                }
        }>
            {cards.map(e => <Grid item
                xs={12} md={6}>
                    <MyCard {...e}/>
            </Grid>)}
        </Grid>
    </>
}
