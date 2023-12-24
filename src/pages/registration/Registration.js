import "./Registration.css"
import {Container, Paper, Stack, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import "../../requests/Client"
import Client from "../../requests/Client";
import {useNavigate} from "react-router-dom";

function Registration() {

    const navigate = useNavigate();

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleLoginInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setLogin(event.target.value)
        }

    }

    const handleFirstNameInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setFirstName(event.target.value)
        }
    }

    const handleLastNameInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setLastName(event.target.value)
        }
    }

    const handlePasswordInput = (event) => {
        if (event.key === "Enter") {
            console.log(event.target.value)
            setPassword(event.target.value)
        }
    }

    const sighUp = () => {
        if (login === "" || password === "") {
            console.log("no login or password")
            return
        }

        console.log(`login: ${login}, password: ${password}`)

        Client.registerNewUser(login, password, firstName, lastName)
            .then(value => value.text())
            .then((value) => {
                console.log(`registered: ${value}`)
                navigate('/')
            }).catch(
            (reason) => {
                console.log(`cant register user: ${reason}`)
            }
        )
    }

    return (
        <Container className="top-padded">
            <Paper className="top-padded" elevation={3}>
                <Stack spacing={4}>
                    <Typography variant="h3" color="text.secondary">
                        Зарегестрироваться
                    </Typography>

                    <TextField id="standard-basic" label="Логин" variant="standard" onKeyDown={handleLoginInput}/>

                    <TextField id="standard-basic" label="Пароль" variant="standard" onKeyDown={handlePasswordInput}/>

                    <TextField id="standard-basic" label="Имя" variant="standard" onKeyDown={handleFirstNameInput}/>

                    <TextField id="standard-basic" label="Фамилия" variant="standard" onKeyDown={handleLastNameInput}/>

                    <Button variant="contained" onClick={sighUp}>Sign Up</Button>

                </Stack>
            </Paper>
        </Container>
    )
}

export default Registration;