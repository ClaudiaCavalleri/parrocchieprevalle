
import CoverSection from "./components/templates/CoverSection/CoverSection";
import Footer from "./components/templates/Footer/Footer";
import Header from "./components/templates/Header/Header";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import TabsSection from "./components/templates/TabsSection/TabsSection";
import { madonnaDelCarrozzone } from "./data/carrozzone";
import { codiciIban } from "./data/codiciIban";
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
                content: {
                    title: 'Orari S.Messe',
                    subtitle: messeData[0].title,
                    text: messeData[0].text[0],
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
                    title: 'Contatti',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />

        <CoverSection 
            titleContent={{
                title: "Opere di bene",
                subtitle: "Donazioni",
                align: 'text-center',
            }}
            contentList={codiciIban}
            mediaProps={{
                alt: 'alt',
                src: 'https://picsum.photos/600/400?random',
            }}
        />

        <MediaContentSection 
            mediaContent={{
                content: {
                    title: storieParrocchie.title,
                    text: storieParrocchie.text,
                },
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
                content: {
                    title: madonnaDelCarrozzone.content?.title,
                    text: madonnaDelCarrozzone.content?.text,
                },
                mediaPosition: 'right',
                mediaProps: madonnaDelCarrozzone.mediaProps,
            }}
        />
        <CoverSection 
            titleContent={{
                title: "Bollettino parrochiale La Via",
                subtitle: "Abbonati",
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
                content: {
                    title: 'Contentmap',
                    text: 'DA implementare componente con mappa a destra e rounded',
                },
                mediaPosition: 'right',
                mediaProps: {
                    alt: '',
                    src: 'https://picsum.photos/600/400?random',
                }
            }}
        />
        <Footer />
       </>
    );
}
  