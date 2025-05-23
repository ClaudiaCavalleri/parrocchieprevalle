
import Map from "./components/atoms/Map/Map";
import CoverSection from "./components/templates/CoverSection/CoverSection";
import Footer from "./components/templates/Footer/Footer";
import Header from "./components/templates/Header/Header";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import SliderGallerySection from "./components/templates/SliderGallerySection/SliderGallerySection";
import TabsSection from "./components/templates/TabsSection/TabsSection";
import { madonnaDelCarrozzone } from "./data/carrozzone";
import { codiciIban } from "./data/codiciIban";
import { contatti } from "./data/contatti";
import { indirizzi } from "./data/indirizzi";
import { messeData } from "./data/orariMesse";
import { slider } from "./data/slider";
import { storieParrocchie } from "./data/storiaParrocchie";

export default function App() {
    return (<>
        <Header 
            navbar={{
                title: "Parrocchie di Prevalle",
                subtitle: "S.Michele arcangelo - S.Zenone",
                mediaProps: {
                    alt: 'logo parrocchie di Prevalle',
                    src: 'src/assets/logo/logoParrocchie.jpg',
                },
                ctaList: [
                    {
                        label: 'Iscrizioni',
                        targetId: "iscrizione-grest",
                    },
                    {
                        label: 'Contatti',
                        targetId: "contatti",
                    },
                    {
                        label: 'S.Messe',
                        targetId: "orari-messe",
                    },
                    {
                        label: 'Dove siamo',
                        targetId: "dove-siamo",
                    },
                ],
            }}
        />
        <CoverSection 
            height="full-height"
            titleContent={{
                title: "Parrocchie di Prevalle",
                subtitle: "Lorem ipsum dolor sit amet",
                text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
                titleProps: {
                    tag: 'h1'
                },
                align: 'text-left',
            }}
            mediaProps={{
                alt: 'alt',
                src: 'src/assets/img/banner chiese.jpg',
            }}
        />
        
        <MediaContentSection 
            idSection="iscrizione-grest"
            mediaContent={{
                type: 'image',
                content: {
                    title: 'Iscrizioni Grest',
                    subtitle: 'Le iscrizioni sono aperte dal al',
                    text: `Inquadra il qr code o clicca sul pulsanto qui sotto. 
                        Verrai reindirizzato al modulo in cui inserire i dati; 
                        qui troverai tutte le informazioni, amche riguardo il pagamento, 
                        che deve essere effettuato SOLO tramite bonifico. 
                        Dopo aver confermato, se l'iscrizione è andata a buon fine riceverai una email di conferma, 
                        con i dati inseriti, all'indirizzo email indicato in fase di iscrizione.`,
                    cta: {
                        label: "Compila il modulo",
                        href: ""
                    }
                },
                contentList: [
                    {
                        subtitle: 'Grest San Zenone',
                        text: `Dal ... al... all'oratorio di S.Zenone`,
                    },
                    {
                        subtitle: 'Grest San Michele',
                        text: `Dal ... al... all'oratorio di S.Michele`,
                    },
                ],
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <MediaContentSection 
            idSection="contatti"
            mediaContent={{
                type: 'image',
                content: {
                    title: 'Segreteria parrocchiale',
                    subtitle: 'La segreteria è a disposizone della comunità per ogni necessità, come richieste di documenti, messe e iscrizioni.',
                    text: `Dove? All'interno della canonica in via don Lodrini 1, accanto alla chiesa parrocchiale di San Zenone (Prevalle sotto).`
                },
                contentList: contatti,
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <SliderGallerySection 
            idSection="slider-gallery"
            mediaList={slider}
            content= {{
                title: 'Le nostre chiese',
                subtitle: 'lorem ipsum',
                text: 'lorem ipsum dolor sit amet'
            }}
        />

        <MediaContentSection 
            idSection="orari-messe"
            mediaContent={{
                type: 'image',
                content: {
                    title: 'orari messe',
                    subtitle: 'lorem ipsum dolor sit amet',
                    text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
                },
                tabList: messeData,
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <CoverSection 
            titleContent={{
                title: "Il dono che unisce",
                subtitle: "Donare è un gesto semplice, ma carico di significato: è condividere ciò che abbiamo per il bene degli altri, è partecipare con gioia alla vita della nostra comunità.",
                text: "Ogni offerta, piccola o grande, sostiene concretamente le opere parrocchiali e ci aiuta a crescere insieme nella fede e nella solidarietà.",
                align: 'text-center',
            }}
            contentList={codiciIban}
            mediaProps={{
                alt: '',
                src: '',
            }}
        />

        <MediaContentSection 
            mediaContent={{
                type: 'image',
                content: {
                    title: 'Parrocchie di Prevalle',
                    subtitle: 'Le origini',
                    text: `Prevalle affonda le sue radici storiche nei borghi di Goglione Sopra e Goglione Sotto.
                    Nel 1792, queste due comunità furono separate sia amministrativamente che spiritualmente, 
                    dando origine alle parrocchie di San Michele Arcangelo e San Zenone. Successivamente, nel 1928, 
                    con un Regio Decreto, le due comunità furono riunificate sotto il nome di Prevalle, 
                    che significa "prima della Valle (Sabbia)".`
                },
                contentList: storieParrocchie,
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <MediaContentSection 
            mediaContent={{
                type: 'image',
                content: {
                    title: 'Santuario della Madonna del Carrozzone',
                    subtitle: 'Un luogo di fede, memoria e gratitudine nel cuore della comunità',
                     text: `Il Santuario della Madonna del Carrozzone, situato al confine tra Prevalle e Gavardo, 
                        è un luogo di profonda devozione popolare, la cui origine risale almeno al XIV secolo, 
                        come attestano documenti che menzionano il toponimo "Carazone" o "Carezon".
                        La denominazione "Carrozzone" sembra derivare da un'evoluzione linguistica del termine latino 
                        *carex*, che indica un luogo paludoso ricco di carici, piante tipiche delle zone umide.`
                },
                contentList: madonnaDelCarrozzone,
                mediaPosition: 'right',
                mediaProps: {
                    alt: 'Santuario della Madonna del Carrozzone',
                    src: 'src/assets/img/MadonnaDelCarrozzonePrevalle.jpg',
                }
            }}
        />
        <CoverSection 
            titleContent={{
                title: "Bollettino parrocchiale La Via",
                subtitle: `Il nostro notiziario parrocchiale è disponibile sia cartaceo sia digitale.
                    Se desideri abbonarti puoi contattare la segreteria parrocchiale.`,
                cta: {
                    label: 'Contattaci',
                    targetId: 'contatti',
                },
                align: "text-center"
            }}
            mediaProps={{
                alt: '',
                // src: '../src/assets/img/la_via.jpg',
                src: ''
            }}
        />
        

        {/* <MediaContentSection 
            mediaContent={{
                type: 'social',
                content: {
                    title: 'Segui la nostra pagina',
                    text: 'Link social',
                },
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: '',
                }
            }}
        /> */}

        <MediaContentSection 
            idSection="dove-siamo"
            mediaContent={{
                type: 'map',
                content: {
                    title: 'I luoghi dello spirito',
                    subtitle: 'Dove il silenzio si fa preghiera, e ogni cuore trova un tempo di pace e racccoglimento.',
                    text: '',
                },
                contentList: indirizzi,
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: '',
                },
                mapProps: {
                    src: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11176.768641800993!2d10.420367211410184!3d45.546459812638986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sprevalle%20parrocchie!5e0!3m2!1sit!2sit!4v1648989439564!5m2!1sit!2sit'
                }
            }}
        />

        <Footer 
            content= {{
                title: 'Parrocchie di S.Michele e S.Zenone in Prevalle',
                subtitle: '',
                text: <a href="tel:+393485876125"><p>Telefono: 348 5876125</p></a>,
            }}
            contentList = {[
                {
                    subtitle: '',
                    text: `Privacy Policy`,
                    textProps: {
                        className: 'policy'
                    }
                },
                {
                    subtitle: '',
                    text: `Cookie policy`,
                    textProps: {
                        className: 'policy'
                    }
                },
                {
                    subtitle: '',
                    text: `© Copyright | 2025`,
                    textProps: {
                        className: 'policy'
                    }
                },
                {
                    subtitle: '',
                    text: `Credits: Me`,
                    textProps: {
                        className: 'policy'
                    }
                },
            ]}
            mediaProps = {{
                alt: '',
                src: 'https://picsum.photos/600/400?random',
            }}
        />

       </>
    );
}
  