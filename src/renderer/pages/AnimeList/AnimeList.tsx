import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './AnimeList.css';

const allAnimeUrl = 'https://api.jikan.moe/v4/anime';
const getAllAnime = async () => {
  const response = await axios.get(allAnimeUrl);
  return response.data;
};

export const UseGetAllAnime = () => {
  const { isLoading, data } = useQuery(['allAnime'], getAllAnime);
  return { data, isLoading };
};

export function AnimeList() {
  const { data, isLoading } = UseGetAllAnime();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="anime-list-container">
      <h1 className="page-title">AnimeList Page</h1>
      <div className="anime-items-container">
        {data?.data?.map((anime) => (
          <Card
            key={anime.mal_id}
            sx={{ maxWidth: 345 }}
            className="anime-item"
          >
            <CardMedia
              component="img"
              height="140"
              image={anime.images.jpg.image_url}
              alt={anime.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {anime.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {anime.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}