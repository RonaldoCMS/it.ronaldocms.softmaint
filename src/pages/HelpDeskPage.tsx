import {Grid} from "@mui/material";
import MyCard from "../components/card/MyCard";
import MyCardProperty from "../components/card/MyCardProperty";
import helpDesk from "./../assets/helpdesk/helpdesk.png";
import programming from "./../assets/helpdesk/programming.jpg";

const cards: MyCardProperty[] = [
    {
        descr: "Il nostro obiettivo Ã¨ di essere per lâ€™azienda non solo un fornitore, ma un vero e proprio partner nel fornire assistenza telefonica pre e post vendita. I nostri servizi di customer support e helpdesk sono sviluppati sulla base delle specifiche esigenze di ogni cliente. Grazie alla formazione continua dei nostri operatori, garantiamo un servizio competente, rapido ed efficace.",
        logo: helpDesk,
        subDescr: "assistenza@softmaint.it",
        title: "HELP DESK"
    },
    {
        descr: "Con lo Sviluppo Software intendiamo la realizzazione di un'applicazione informatica software o un progetto di integrazione personalizzato con l'ERP. In questo caso seguiamo completamente il progetto, dall'analisi, alla progettazione, alla realizzazione e testing. Questo permette all'azienda di avere a disposizione un software completo che risolve suoi specifici problemi, senza essere obbligata ad adattarsi a soluzioni commerciali generalizzate.",
        logo: programming,
        subDescr: "sviluppo@softmaint.it",
        title: "ANALISYS and PROGRAMMING"
    },
]

export default function HelpDeskPage() {
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