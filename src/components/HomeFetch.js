import React from 'react';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const HomeFetch = () => {
  const { state } = useHomeFetch();
  console.log(state);
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header="Popular Movies">
        {state.results.map((item, i) => (
          <Thumb
            key={i}
            image={
              item.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                : NoImage
            }
            clickable={true}
            movieId={item.id}
          >
            {item.title}
          </Thumb>
        ))}
      </Grid>
    </>
  );
};

export default HomeFetch;
