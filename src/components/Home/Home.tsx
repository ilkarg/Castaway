import "./styles/Home.sass";
import { Stack, Typography, Link } from "@mui/material";

const photo = require("../../assets/images/photo.png");

const spotify = require("../../assets/images/spotify.png");
const pocketCasts = require("../../assets/images/pocket_casts.png");
const soundCloud = require("../../assets/images/sound_cloud.png");
const applePodcast = require("../../assets/images/apple_podcast.png");
const overcast = require("../../assets/images/overcast.png");

export const Home = () => {
    return (
        <>
            <Stack
                justifyContent="flex-start"
                alignItems="center"
                direction="row"
                sx={{ mt: 14 }}
            >
                <Stack>
                    <img src={photo} alt="photo" width="650" height="873" />
                </Stack>
                <Stack sx={{ ml: 7 }}>
                    <Stack>
                        <Typography className="Home__Text">Take your</Typography>
                        <Typography className="Home__Text" sx={{ mt: -2 }}>podcasts to the</Typography>
                        <Typography className="Home__Text" sx={{ mt: -2 }}>
                            <span className="Home__Text__LabelNext">next</span>
                            <span className="Home__Text__LabelLevel"> level</span>
                        </Typography>
                    </Stack>
                    <Stack
                        sx={{ mb: -15, mt: 9 }}
                    >
                        <Typography className="Home__Text__LabelListen">Listen on</Typography>
                        <Stack
                            direction="row"
                            sx={{ mt: 2 }}
                            spacing={2}
                        >
                            <Link href="#">
                                <img src={spotify} alt="spotify" />
                            </Link>
                            <Link href="#">
                                <img src={pocketCasts} alt="pocket_casts" />
                            </Link>
                            <Link href="#">
                                <img src={soundCloud} alt="sound_cloud" />
                            </Link>
                            <Link href="#">
                                <img src={applePodcast} alt="apple_podcasts" />
                            </Link>
                            <Link href="#">
                                <img src={overcast} alt="overcast" />
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}