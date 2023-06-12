import React from 'react';
import "./styles/EpisodeCard.sass";
import { EpisodeCardModel } from "../../Models";
import { Typography, Button, Link, Card, Stack } from "@mui/material";

export const EpisodeCard = (props: EpisodeCardModel) => {
    const [cardData, setCardData] = React.useState({
        episodeImage: "",
        episodeTag: "",
        episodeNumber: 0,
        episodeName: [""],
        episodeAbout: [""]
    });

    React.useEffect(() => {
        setCardData({
            ...cardData,
            episodeImage: require(`../../assets/images/${props.episodeImage}`),
            episodeTag: props.episodeTag,
            episodeNumber: props.episodeNumber,
            episodeName: props.episodeName.split("\\n"),
            episodeAbout: props.episodeAbout.split("\\n")
        });
    }, []);

    return (
        <Card className="EpisodeCard" sx={{ mt: 5 }}>
            <Stack>
                <Stack
                    justifyContent="center"
                    direction="row"
                    sx={{ mt: 3, ml: -1 }}
                >
                    <img src={cardData.episodeImage} width="400" height="500" alt="image" />
                    <Stack sx={{ mt: 1.5, ml: 3 }}>
                        <Stack
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography className="EpisodeCard__EpisodeTag">{cardData.episodeTag}</Typography>
                            <Typography className="EpisodeCard__EpisodeNumber" sx={{ mt: 5 }}>Episode {cardData.episodeNumber}</Typography>
                            <Typography className="EpisodeCard__EpisodeName" sx={{ mt: 2 }}>
                                {
                                    cardData.episodeName.map((line: string) => (
                                        <Typography className="EpisodeCard__EpisodeName__Line">{line}</Typography>
                                    ))
                                }
                            </Typography>
                            <Typography className="EpisodeCard__EpisodeAbout" sx={{ mt: 5 }}>
                                {
                                    cardData.episodeAbout.map((line: string) => (
                                        <Typography className="EpisodeCard__EpisodeAbout__Line">{line}</Typography>
                                    ))
                                }
                            </Typography>
                        </Stack>
                        <Link href="#">
                            <Button variant="contained" className="EpisodeCard__ButtonDetails">
                                View Episode Details
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
}