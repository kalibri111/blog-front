import {Card, CardContent, CardMedia, Paper, Stack, Typography} from "@mui/material";
import examplePhoto from '../../img/me.png'

function PhotoCard(photoPath: string, cameraName: string, lensName: string, dateName: string, placeName: string) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={examplePhoto}
                alt="photo"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PhotoCard