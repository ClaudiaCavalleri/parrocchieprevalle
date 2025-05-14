
import BannerSection from "./components/templates/BannerSection/BannerSection";
import Footer from "./components/templates/Footer/Footer";
import Header from "./components/templates/Header/Header";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import TabsSection from "./components/templates/TabsSection/TabsSection";
import { messeData } from "./data/orariMesse";

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
                    title: 'Soria delle parrocchie di Prevalle',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'left',
                imageUrl: 'https://picsum.photos/600/400?random'
            }}
        />
        Slider gallery
        <MediaContentSection 
            mediaContent={{
                content: {
                    title: 'Santuario della madonna del Carrozzone',
                    text: 'Lorem Ipsum dolor sit amet',
                },
                mediaPosition: 'right',
                imageUrl: 'https://picsum.photos/600/400?random'
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
  