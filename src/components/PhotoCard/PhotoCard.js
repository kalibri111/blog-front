import {Card, CardContent, CardMedia, Paper, Stack, Typography} from "@mui/material";
import examplePhoto from '../../img/me.png'

function PhotoCard(photoPath: string, cameraName: string, lensName: string, dateName: string, placeName: string) {
    return (
        <Card>
            <CardMedia
                component="img"
                image={examplePhoto}
                alt="photo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Description example here
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PhotoCard