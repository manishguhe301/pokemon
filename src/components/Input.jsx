import { Button } from '@mui/material';

const InputComponent = ({ inputValue, setInputValue, onSearchClick }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    if (!inputValue.trim()) {
      onSearchClick();
    }
  };

  const handleSearchButtonClick = () => {
    onSearchClick();
  };

  return (
    <div className='flex h-full items-center gap-2 flex-[2] w-full'>
      <input
        type='text'
        className='h-full w-full border-[#ffcb05] rounded outline-none border-2 pl-3 pr-3'
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder='Search By Id Or Name...'
      />
      <Button
        variant='contained'
        className='h-full'
        sx={{ background: '#ffcb05', fontWeight: 800 }}
        onClick={handleSearchButtonClick}
      >
        Search
      </Button>
    </div>
  );
};

export default InputComponent;
