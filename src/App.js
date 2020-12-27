import "./App.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function App() {
    const [uuid, setUuid] = useState(() => uuidv4());

    function generateUUID(e) {
        const uuid = uuidv4();
        setUuid(uuid);
    }

    return (
        <div className="App">
            <CssBaseline></CssBaseline>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">UUID Generator</Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "calc(100vh - 64px)" }}
            >
                <Card
                    style={{
                        minWidth: "350px",
                    }}
                >
                    <CardContent>
                        <Typography variant="h3">UUID:</Typography>
                        <Typography variant="body2">{uuid}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={generateUUID}
                            style={{
                                marginTop: "16px",
                            }}
                        >
                            Generate
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}

export default App;
