import "./styles/Main.sass";
import { Menu } from "../../components/Menu/Menu";
import { Home } from "../../components/Home/Home";
import { EpisodeCard } from "../../components/EpisodeCard/EpisodeCard";

export const Main = () => {
    return (
        <>
            <Menu />
            <Home />
            <EpisodeCard 
                episodeImage="photo.png"
                episodeTag="Gear"
                episodeNumber={3}
                episodeName="Should you get\noutboard audio gear?"
                episodeAbout="Is hardware really worth it when it comes to podcasting? The answer is...it\ndepends. Here's our reasons on why you might want to consider picking\nsomething up"
            />
        </>
    );
}
