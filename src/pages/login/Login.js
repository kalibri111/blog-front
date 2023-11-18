import {Container, Paper, Stack, TextField, Typography} from "@mui/material";
import "./Login.css"
import Button from "@mui/material/Button";

function Login() {
    return (
        <Container className="top-padded">
            <Paper className="top-padded">
                <Stack spacing={4}>
                    <Typography variant="h3" color="text.secondary">
                        Мой login для меня
                    </Typography>

                    <TextField id="standard-basic" label="Логин" variant="standard" />

                    <TextField id="standard-basic" label="Пароль" variant="standard" />

                    <Button variant="contained">Log in</Button>

                </Stack>
            </Paper>
        </Container>

    )
}

export default Login