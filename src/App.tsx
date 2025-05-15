
import BannerSection from "./components/templates/BannerSection/BannerSection";
import Footer from "./components/templates/Footer/Footer";
import Header from "./components/templates/Header/Header";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import TabsSection from "./components/templates/TabsSection/TabsSection";
import { madonnaDelCarrozzone } from "./data/carrozzone";
import { messeData } from "./data/orariMesse";
import { storieParrocchie } from "./data/storiaParrocchie";

export default function App() {
    return (<>
        <Header />
        Hero section all'interno dell'header
        <BannerSection 
            titleContent={{
                title: "Opere di bene",
                subtitle: "Donazioni",
                align: 'text-center',
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
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        {/* <TabsSection /> */}
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Contatti',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'right',
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: storieParrocchie.title,
                    text: storieParrocchie.text,
                },
                mediaPosition: 'left',
                imageUrl: 'https://picsum.photos/600/400?random'
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
                mediaProps: {
                    alt: madonnaDelCarrozzone.alt,
                    src: madonnaDelCarrozzone.imageUrl,
                }
            }}
        />
        <BannerSection 
            titleContent={{
                title: "Bollettino parrochiale La Via",
                subtitle: "Abbonati",
                align: 'text-center',
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Iscrizioni Grest',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'left',
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Segui la nostra pagina',
                    text: 'Link social',
                },
                mediaPosition: 'right',
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Contentmap',
                    text: 'DA implementare componente con mappa a destra e rounded',
                },
                mediaPosition: 'right',
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        <Footer />
       </>
    );
}
  