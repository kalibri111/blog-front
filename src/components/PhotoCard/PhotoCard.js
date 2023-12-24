import {Card, CardContent, CardMedia, Paper, Stack, Typography} from "@mui/material";
import examplePhoto from '../../img/me.png'


function PhotoCard(photo: any, cameraName: string, lensName: string, dateName: string, placeName: string) {
    return (
        <Card>
            <CardMedia
                component="img"
                image={photo}
                alt="photo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Camera: {cameraName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Lens: {lensName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Date: {dateName}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PhotoCard