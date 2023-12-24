import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Select from './Select';
import InputComponent from './Input';

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(6);
  const [type, setType] = useState('');
  const [inputValue, setInputValue] = useState('');

  const getPokemons = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );
      setPokemons(res.data.results);
    } catch (error) {
      alert('An Error Occured! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setLimit((prev) => prev + 6);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [limit]);

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  const filterAndSearchPokemons = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );
      let filteredPokemons = res.data.results;

      if (inputValue) {
        const searchRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
        );
        if (searchRes.data) {
          filteredPokemons = [searchRes.data];
        } else {
          filteredPokemons = [];
        }
      } else {
        if (type) {
          filteredPokemons = await Promise.all(
            filteredPokemons.map(async (pokemon) => {
              const pokemonDetails = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
              );
              const types = pokemonDetails.data.types.map((t) => t.type.name);

              return { ...pokemon, types };
            })
          );

          filteredPokemons = filteredPokemons.filter((pokemon) =>
            pokemon.types.includes(type)
          );
        }
      }

      setPokemons(filteredPokemons);
    } catch (error) {
      console.error('An error occurred while filtering/searching.', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filterAndSearchPokemons();
  }, [limit, type]);

  useEffect(() => {
    !inputValue && getPokemons();
  }, [inputValue]);

  const handleSearchClick = () => {
    filterAndSearchPokemons();
  };

  return (
    <div className='pt-5 pl-10 pr-10 pb-5'>
      <div className='h-10 flex items-center  justify-between w-full mb-5 gap-8   '>
        <div className='flex h-full  items-center gap-2 flex-[2] w-full'>
          <InputComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSearchClick={handleSearchClick}
          />
        </div>
        <div className='flex-[1] w-full'>
          <Select
            type={type}
            setType={setType}
            filterAndSearchPokemons={filterAndSearchPokemons}
          />
        </div>
      </div>
      {loading ? (
        <Box className='w-[100%] h-[80vh] flex justify-center items-center'>
          <CircularProgress disableShrink sx={{ color: '#ffcb05' }} />
        </Box>
      ) : (
        <div>
          {pokemons.length > 0 ? (
            <Grid container spacing={3}>
              {pokemons.map((pokemon, index) => (
                <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                  <Card pokemon={pokemon} id={index} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div>No Pokémon found based on the selected criteria.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default List;
