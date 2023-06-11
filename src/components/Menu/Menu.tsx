import "./styles/Menu.sass";
import { Box, AppBar, Toolbar, IconButton, Stack, Link, Grid } from "@mui/material";

const logo = require('./../../assets/images/logo.png');

export const Menu = () => {
    return (
        <nav className="Menu">
            <Box sx={{ m: -1, mb: 1 }}>
                <AppBar sx={{ mt: 1.5 }} className="Menu__AppBar" position="fixed">
                    <Stack
                        direction="row"
                    >
                        <Toolbar sx={{ flexGrow: 1 }} className="Menu__Logo">
                            <img src={logo} alt="logo" />
                        </Toolbar>
                        <Toolbar className="Menu__Links">
                            <Link href="#" className="Menu__Links__Link" underline="none">Home</Link>
                            <Link href="#" className="Menu__Links__Link" underline="none">Episodes</Link>
                            <Link href="#" className="Menu__Links__Link" underline="none">About</Link>
                            <Link href="#" className="Menu__Links__Link" underline="none">Contact</Link>
                        </Toolbar>
                    </Stack>
                </AppBar>
            </Box>
        </nav>
    );
}
