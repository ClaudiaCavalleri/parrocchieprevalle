
import Map from "./components/atoms/Map/Map";
import CoverSection from "./components/templates/CoverSection/CoverSection";
import Footer from "./components/templates/Footer/Footer";
import Header from "./components/templates/Header/Header";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import TabsSection from "./components/templates/TabsSection/TabsSection";
import { madonnaDelCarrozzone } from "./data/carrozzone";
import { codiciIban } from "./data/codiciIban";
import { contatti } from "./data/contatti";
import { indirizzi } from "./data/indirizzi";
import { messeData } from "./data/orariMesse";
import { storieParrocchie } from "./data/storiaParrocchie";

export default function App() {
    return (<>
        <Header />
        <CoverSection 
            height="full-height"
            titleContent={{
                title: "Parrocchie di Prevalle",
                subtitle: "Lorem ipsum dolor sit amet",
                text: 'Lorem ipsum dolor sit amet',
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
            mediaContent={{
                contentList: messeData,
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <MediaContentSection 
            mediaContent={{
                contentList: contatti,
                mediaPosition: 'right',
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
                contentList: storieParrocchie,
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />
        Slider gallery
        <MediaContentSection 
            mediaContent={{
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
                title: "Bollettino parrochiale La Via",
                subtitle: "Abbonati",
                align: "text-center"
            }}
            mediaProps={{
                alt: '',
                src: '',
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Iscrizioni Grest',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'left',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Segui la nostra pagina',
                    text: 'Link social',
                },
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />
        <MediaContentSection 
            mediaContent={{
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
        <Footer />
       </>
    );
}
  