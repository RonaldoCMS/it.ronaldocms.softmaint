import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

export default function ArcaDetails() {

const data:TimelineItemModel[] = [
    {
        title: "Arca EVOLUTION ti aiuta a crescere",
        active: true,
        cardSubtitle : "Ti aiuta ad avere la giusta consapevolezza dello stato di salute della tua azienda, grazie alla disponibilità di dati e report aggiornati in tempo reale e all'integrazione con applicazioni di Microsft Office Automation. Conserva la storia dei dati di clienti e fornitori così da non dovere gestire anagrafiche duplicate o multiplicate.",
        cardTitle: "Incrementa la conoscenza",
       
    },     
    {
        title: "Arca EVOLUTION ti fa risparmiare tempo",
        active: true,
        cardSubtitle : "Ha una grafica intuitiva, universalmente facile da apprendere anche da parte di utenti poco esperti o da poco in azienda. Offre una navigazione agile che permette il passaggio tra i dati del gestionale con pochissimi clic e da un'unica videata. Dall'anagrafica cliente Ã¨ possibile ad esempio accedere a documenti, scadenze, insoluti.",
        cardTitle: "Modulare e scalabile",
    },  
    {
        title: "Arca EVOLUTION cresce con te",
        active: true,
        cardSubtitle : "Un ERP completo e che permette di digitalizzare tutti i processi aziendali (contabili, commerciali, logistici, produttivi, documentali), rendendo efficace ed efficiente la tua azienda. E' allo stesso tempo un ERP modulare: permette lâ€™aggiunta, nel tempo, di ulteriori moduli per supportare la crescita aziendale e rispondere cosÃ¬ alle nuove esigenze funzionali.",
        cardTitle: "Flessibile e personalizzabile",
    },  
    {
        title: "Arca EVOLUTION si adatta a te",
        active: true,
        cardSubtitle : "E' un gestionale flessibile e puÃ² essere personalizzato sulla base dei tuoi processi aziendali e delle tue esigenze che possono anche cambiare nel tempo. Con Arca EVOLUTION non devi rivoluzione il tuo modo di lavorare, nÃ¨ quello della tua azienda.",
        cardTitle: "Flessibile e personalizzabile",
    },  
    {
        title: "Arca EVOLUTION ti fa evitare gli errori",
        active: true,
        cardSubtitle : "Puoi concentrarti sul tuo business e non preoccuparti delle novitÃ  normative: Arca EVOLUTION è sempre puntualmente aggiornato con i piÃ¹ recenti adeguamenti normativi contabili e fiscali.",
        cardTitle: "Sempre aggiornato con la normativa",
    },  
    {
        title: "Arca EVOLUTION ti semplifica la vita",
        active: true,
        cardSubtitle : "Con la nuova Home Page puoi effettuare una serie di attivitÃ  e visualizzare i principali avvenimenti direttamente dalla pagina principale del tuo ERP, senza navigare tra le funzioni del gestionale.",
        cardTitle: "Nuova Home Page!",
       
    },  
];

  
return <div className="App">
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          focusActiveItemOnLoad
          disableAutoScrollOnClick={true}
          disableClickOnCircle={true}
          disableNavOnKey={true}
          activeItemIndex={7}
          slideShow={false}
          flipLayout={false}
        >
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/about.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/idea.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/sun.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/info.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/calendar.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mailbox-closed-flag-down.png"
              alt="mail-box"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
              alt="pinterest"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/reddit.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/facebook.png"
              alt="reddit"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/stumbleupon.png"
              alt="reddit"
            />
          </div>
        </Chrono>
      </div>
}
