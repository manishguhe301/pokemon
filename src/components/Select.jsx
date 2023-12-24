import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SelectComponent = ({ type, setType }) => { 

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className='w-full'>
      <FormControl sx={{width:'100%'}}>
        <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
        <Select labelId="demo-simple-select-label" value={type} onChange={handleChange} label="Select Type">
          <MenuItem value='normal'>Normal</MenuItem>
          <MenuItem value='fire'>Fire</MenuItem>
          <MenuItem value='water'>Water</MenuItem>
          <MenuItem value='electric'>Electric</MenuItem>
          <MenuItem value='grass'>Grass</MenuItem>
          <MenuItem value='ice'>Ice</MenuItem>
          <MenuItem value='fighting'>Fighting</MenuItem>
          <MenuItem value='poison'>Poison</MenuItem>
          <MenuItem value='ground'>Ground</MenuItem>
          <MenuItem value='flying'>Flying</MenuItem>
          <MenuItem value='psychic'>Psychic</MenuItem>
          <MenuItem value='bug'>Bug</MenuItem>
          <MenuItem value='rock'>Rock</MenuItem>
          <MenuItem value='ghost'>Ghost</MenuItem>
          <MenuItem value='dragon'>Dragon</MenuItem>
          <MenuItem value='dark'>Dark</MenuItem>
          <MenuItem value='steel'>Steel</MenuItem>
          <MenuItem value='fairy'>Fairy</MenuItem>
          <MenuItem value='stellar'>Stellar</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;
