import React from 'react';
import "./styles/EpisodeCard.sass";
import { EpisodeCardModel } from "../../Models";
import { Typography } from "@mui/material";

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
        <div className="EpisodeCard">
            <img src={cardData.episodeImage} alt="image"/>
            <Typography className="EpisodeCard__Tag">{cardData.episodeTag}</Typography>
            <Typography className="EpisodeCard__Number">Episode {cardData.episodeNumber}</Typography>
            <Typography className="EpisodeCard__Name">
                {
                    cardData.episodeName.map((line: string) => (
                        <Typography className="EpisodeCard__Name__Line">{line}</Typography>
                    ))
                }
            </Typography>
            <Typography className="EpisodeCard__About">
                {
                    cardData.episodeAbout.map((line: string) => (
                        <Typography className="EpisodeCard__About__Line">{line}</Typography>
                    ))
                }
            </Typography>
        </div>
    );
}