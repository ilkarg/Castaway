import "./styles/Main.sass";
import { Menu } from "../../components/Menu/Menu";
import { Home } from "../../components/Home/Home";
import { LatestEpisodes } from "../../components/LatestEpisodes/LatestEpisodes";
import { Stack } from "@mui/material";

export const Main = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
        >
            <Menu />
            <Home />
            <LatestEpisodes />
        </Stack>
    );
}
