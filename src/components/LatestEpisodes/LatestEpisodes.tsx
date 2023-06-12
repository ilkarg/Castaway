import "./styles/LatestEpisodes.sass";
import { Stack, Typography, Link, Button } from "@mui/material";
import { EpisodeCard } from "../EpisodeCard/EpisodeCard";

export const LatestEpisodes = () => {
    return (
        <Stack id="LatestEpisodes" className="LatestEpisodes" sx={{ mt: 5 }}>
            <Stack direction="row">
                <Stack sx={{ flexGrow: 1 }}>
                    <Typography className="LatestEpisodes__Header">Latest episodes</Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                >
                    <Link href="#">
                        <Button variant="contained" className="LatestEpisodes__ButtonViewAll">View all episodes</Button>
                    </Link>
                </Stack>
            </Stack>
            <EpisodeCard
                episodeImage="podcast_photo_3.png"
                episodeTag="Gear"
                episodeNumber={3}
                episodeName="Should you get\noutboard audio gear?"
                episodeAbout="Is hardware really worth it when it comes to podcasting? The answer is...it\ndepends. Here's our reasons on why you might want to consider picking\nsomething up."
            />
            <EpisodeCard
                episodeImage="podcast_photo_2.png"
                episodeTag="Tips & Tricks"
                episodeNumber={2}
                episodeName="Mic tricks to take\nyou to the next level"
                episodeAbout="Stop rolling with those default settings on your mic. These small tweaks will\ntake you from sounding good to great."
            />
            <EpisodeCard
                episodeImage="podcast_photo_1.png"
                episodeTag="Gear"
                episodeNumber={1}
                episodeName="The best microphone\nunder $200"
                episodeAbout="With so many microphones on the market, how are you supposed to know\n what's the best? Take a look at our top picks."
            />
        </Stack>
    );
}