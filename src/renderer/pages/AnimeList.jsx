import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { UseGetAllAnime } from 'queries/AnimeQueries';
import './AnimeList.css';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function AnimeList() {
  const { data, isLoading } = UseGetAllAnime();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="anime-list-container">
      <h1 className="page-title">AnimeList Page</h1>
      <div className="anime-items-container">
        {data?.data?.map(function (anime) {
          return (
            <Card
              className="anime-item"
              key={anime.mal_id}
              sx={{ maxWidth: 345 }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {anime.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {anime.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Expand Anime</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
