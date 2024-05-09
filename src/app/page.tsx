"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const cardsPerPage = 15;
const totalCards = blogData.length;
const totalPages = Math.ceil(totalCards / cardsPerPage);

const [currentPage, setCurrentPage] = useState(1);

const handlePageChange = (
  event: React.ChangeEvent<unknown>,
  page: number
) => {
  setCurrentPage(page);
};

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          marginLeft: "25px",
          marginRight: "25px",
          paddingLeft: "63px",
        }}
      >
        <Typography
          variant="h5"
          mr="35px"
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Explore Blogs
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:"1fr 1fr 1fr 1fr",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        {blogData.map((card, index) => (
          <Card
            sx={{
              maxWidth: 300, flex: 1, 
                margin: "8px 8px",  
                backgroundColor:"#ffffff",
                minWidth: "200px",
                "&:hover": {
                  transform: "scale(1.02)",
                  opacity:"80%"
                },
              transition: "all 0.2s ease-in-out",
            }}
          >
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height="300px"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {card.title}
                </Typography>
                <Typography fontSize={12}>{card.author}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size="small"
        />
      </Box>
    </Container>
  );
}
