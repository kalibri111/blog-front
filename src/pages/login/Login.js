import {Container, Paper, Stack, TextField, Typography} from "@mui/material";
import "./Login.css"
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Client from "../../requests/Client";
import {
    globalUserFirstName,
    globalUserLastName,
    setUserFirstName,
    setUserLastName
} from "../../components/HeaderAppBar/HeaderAppBar";

function Login() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register")
    }
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleLoginInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setLogin(event.target.value)
        }

    }

    const handlePasswordInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setPassword(event.target.value)
        }
    }

    const loginUser = () => {
        if (login === "" || password === "") {
            console.log("no login or password")
            return
        }

        Client.loginUser(login, password)
            .then(value =>
                value.json()
            ).then(value => {
                Client.getCurrentUser(value.token)
                    .then(curUserResp => curUserResp.json())
                    .then(curUserResp => {
                        console.log("logged in")
                        console.log(curUserResp)
                        setUserLastName(curUserResp.LastName)
                        setUserFirstName(curUserResp.FirstName)
                        navigate("/")
                    })
            }).catch(
            (reason) => {
                console.log(`cant login user: ${reason}`)
            }
        )
    }

    return (
        <Container className="top-padded">
            <Paper className="top-padded" elevation={3}>
                <Stack spacing={4}>
                    <Typography variant="h3" color="text.secondary">
                        Мой login для меня
                    </Typography>

                    <TextField id="standard-basic" label="Логин" variant="standard" onKeyDown={handleLoginInput}/>

                    <TextField id="standard-basic" label="Пароль" variant="standard" onKeyDown={handlePasswordInput}/>

                    <Button variant="contained" onClick={loginUser}>Log in</Button>

                    <Button variant="contained" onClick={handleRegisterClick}>Registration</Button>

                </Stack>
            </Paper>
        </Container>

    )
}

export default Login