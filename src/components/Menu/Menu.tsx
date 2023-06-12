import "./styles/Menu.sass";
import { Box, AppBar, Toolbar, IconButton, Stack, Link, Grid } from "@mui/material";

const logo = require('./../../assets/images/logo.png');

export const Menu = () => {
    const setActiveLink = (elem: HTMLDivElement) => {
        const menu: HTMLDivElement = elem.parentNode as HTMLDivElement;
        for (let i = 0; i < menu.childNodes.length; i++) {
            (menu?.childNodes[i] as HTMLDivElement).classList.remove("active");
        }
        elem.classList.add("active");
    }

    return (
        <nav className="Menu">
            <Box sx={{ m: -1, mb: 1 }}>
                <AppBar className="Menu__AppBar" position="fixed">
                    <Stack
                        direction="row"
                    >
                        <Toolbar sx={{ flexGrow: 1, mt: 1.5 }} className="Menu__Logo">
                            <img src={logo} alt="logo" />
                        </Toolbar>
                        <Toolbar sx={{ mt: 1.5 }} className="Menu__Links">
                            <Link 
                                href="#" 
                                onClick={(event) => setActiveLink(event.target as HTMLDivElement)} 
                                className="Menu__Links__Link active" 
                                underline="none"
                            >Home</Link>
                            <Link 
                                href="#LatestEpisodes" 
                                onClick={(event) => setActiveLink(event.target as HTMLDivElement)} 
                                className="Menu__Links__Link" 
                                underline="none"
                            >Episodes</Link>
                            <Link 
                                href="#" 
                                onClick={(event) => setActiveLink(event.target as HTMLDivElement)} 
                                className="Menu__Links__Link" 
                                underline="none"
                            >About</Link>
                            <Link
                                href="#" 
                                onClick={(event) => setActiveLink(event.target as HTMLDivElement)} 
                                className="Menu__Links__Link" 
                                underline="none"
                            >Contact</Link>
                        </Toolbar>
                    </Stack>
                </AppBar>
            </Box>
        </nav>
    );
}
