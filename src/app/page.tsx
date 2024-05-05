import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.popular_blogs}>
        <h3>Popular Blogs</h3>
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            {/* First Card */}
            <Card sx={{ maxWidth: 300, flex: 1, margin: '0 8px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="Bhanu.jpg"
                  alt="Trek"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    My first trek to AmaYangri
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By Anguri Pandey
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Second Card */}
            <Card sx={{ maxWidth: 300, flex: 1, margin: '0 8px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="Tyson.jpg" 
                  alt="Tyson"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Tyson with tiger
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By Anirudra Shrestha
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            {/* Third Card */}
            <Card sx={{ maxWidth: 300, flex: 1, margin: '0 8px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="Lumbini.jpg" 
                  alt="Trip"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Trip to Lumbini
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By Bhanuumatiii
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
