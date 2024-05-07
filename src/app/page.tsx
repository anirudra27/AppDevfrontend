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

const blogData = [
  {
    title: "My first trek to AmaYangri",
    image: "Bhanu.jpg",
    author: "Anguri Pandey",
  },
  {
    title: "Tyson with tiger",
    image: "Tyson.jpg",
    author: "Anirudra Shrestha",
  },
  {
    title: "Trip to Lumbini",
    image: "Lumbini.jpg",
    author: "Bhanuumatiii",
  },
  {
    title: "Sunshine and smile",
    image: "annie.jpg",
    author: "Anniieeeee",
  },
  {
    title: "Miss Sunshine ",
    image: "annie2.jpg",
    author: "Anniieeeee",
  },
  {
    title: "Summer Swimming",
    image: "swim.jpeg",
    author: "Anniieeeee",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.popular_blogs}>
        <h3>Popular Blogs</h3>
          <div className={styles.cardContainer}>
            {blogData.map((blog, index) => (
              <Card sx={{ maxWidth: 300, flex: 1, 
                margin: "8px 8px",  
                backgroundColor:"#ffffff",
                minWidth: "200px",
              }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      By {blog.author}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
      </div>
    </main>
  );
}
