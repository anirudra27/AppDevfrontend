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
import { cardsData } from "../common/mock/mockdata";
import { useState } from "react";

const BlogsPage = () => {
  const router = useRouter();

  const handleAllFilter = () => {
    router.push("/blogs");
  };

  const handlePopularFilter = () => {
    router.push("/blogs");
  };

  const handleLatestFilter = () => {
    router.push("/blogs");
  };

  const cardsPerPage = 15;
  const totalCards = cardsData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const getPageCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsData.slice(startIndex, endIndex);
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
        <Stack direction="row" spacing={1.5}>
          <Chip
            label="All"
            onClick={handleAllFilter}
            sx={{ borderRadius: "4px" }}
          />
          <Chip
            label="Popular"
            variant="outlined"
            onClick={handlePopularFilter}
            sx={{ borderRadius: "4px" }}
          />
          <Chip
            label="Latest"
            variant="outlined"
            onClick={handleLatestFilter}
            sx={{ borderRadius: "4px" }}
          />
        </Stack>
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
        {getPageCards().map((card, index) => (
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
};

export default BlogsPage;