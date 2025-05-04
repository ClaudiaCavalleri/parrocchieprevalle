import Content from "./components/molecules/Content/Content";
import Tabs from "./components/organisms/Tabs/Tabs";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";

export default function App() {
    return (<>
        <Content 
                title="Parrocchie di Prevalle"
                subtitle="subtitle test"
                text="text lorem ipsum"
        />
        <Tabs />
        <MediaContentSection />
       </>
    );
}
  