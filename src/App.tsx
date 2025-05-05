import Content from "./components/molecules/Content/Content";
import MediaContentSection from "./components/templates/MediaContentSection/MediaContentSection";
import TabsSection from "./components/templates/TabsSection/TabsSection";

export default function App() {
    return (<>
        <Content 
                title="Parrocchie di Prevalle"
                subtitle="subtitle test"
                text="text lorem ipsum"
        />
        <TabsSection />
        <MediaContentSection />
       </>
    );
}
  