import React from 'react';
import './AboutMe.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
// import MyCard from "../../components/MyCard/MyCard";
import MyPage from "../../page-style/PageStyle";
import {me} from "../../img/me.png"
import {Avatar, Stack, SvgIcon, Typography} from "@mui/material";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import FooterFAB from "../../components/footer-fabs/FooterFAB";

function AboutMe() {
    const navigate = useNavigate();
    const content =
        <div className="wrapper">
            <div className="about-me-wrapper">
                <div className="wrapper">

                    <div className="about-me-summary-wrapper">
                        <Typography variant="body2" color="text.secondary">
                            Мне 23 года, учусь на 4 курсе факультета ФПМИ в МФТИ. Интересуюсь бэкенд разработкой на С++,<br/>
                            Python + Django, Java, также разработкой ПО для встроенных систем на С. Разбираюсь в<br/>
                            алгоритмах, структурах данных, принципах многопоточной синхронизации, знаком с базами данных<br/>
                            на примере PostgreSQL. Знаю JavaScript на примере React. Также разбираюсь в Git, Docker,<br/>
                            OpenShift service mesh, Kubernetes.<br/>
                        </Typography>
                    </div>
                </div>

                <div style={{height: '90%', width: 5, backgroundColor: "var(--secondary-main)"}}></div>

                <div className="about-me-resume-wrapper">
                    <Typography variant="body2" color="text.secondary">
                        Специализация<br/>
                        Python, C++ backend development. Django. PostgreSQL. JavaScript + React. Android development
                        with Java. C with STM32. Java Backend. Kubernetes. Service Mesh. OpenShift. Docker. Git.
                        Concurrency. Algorithms.<br/>
                        Опыт<br/>
                        Стажер Django, keysystems; cheboksary, russia — 5 месяцев<br/>
                        Моя первая стажировка, компания https://www.keysystems.ru/ делает B-to-B решения в сфере
                        информационной безопасности. Тестовое задание: https://github.com/kalibri111/entery_task<br/>
                        Стажер Python, iserv; cheboksary, russia — 3 месяца<br/>
                        Во время этой стажировки я делал синтаксический анализатор-переводчик с языка JavaEL на FEEL,
                        часть кода: https://github.com/kalibri111/javael-to-feel<br/>
                        Стажер JAVA, SBER TECH; MOSKOW, russia — 3 месяца<br/>
                        Junior C/C++, SBER TECH; MOSKOW, russia — 3 месяца<br/>
                        Core Database developer<br/>
                        образование<br/>
                        МФТИ ( https://mipt.ru/english/about/ ) — 2 курс ФПМИ ( https://mipt.ru/english/edu/departments/
                        ) бакалавриата<br/>
                        Курсы<br/>
                        Python for WEB https://www.coursera.org/learn/python-for-web<br/>
                        C++ doing now https://www.coursera.org/learn/c-plus-plus-brown<br/>
                        React + Redux https://www.udemy.com/course/pro-react-redux/<br/>
                        Industrial programming on C from https://track.mail.ru/<br/>
                        MIPT Concurrency<br/>
                        MIPT Algorithms<br/>
                        MIPT C++<br/>
                        MIPT Operations Systems<br/>
                    </Typography>
                </div>
            </div>

            <FooterFAB/>
        </div>
    return (
        <Stack className="full-display" spacing={3}>
            <HeaderAppBar/>
            {content}
        </Stack>

    )
}


export default AboutMe;