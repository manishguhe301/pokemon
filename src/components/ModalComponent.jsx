import { Box, Modal, Button } from '@mui/material';
import styled from 'styled-components';

const StyledImage = styled.img`
  @media (max-width: 500px) {
    max-height: 128px;
  }
`;

const BarChart = ({ stats }) => {
  return (
    <div>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{ marginBottom: '10px' }}
          className='flex w-full gap-4 justify-between'
        >
          <div className='capitalize'>{stat.stat.name}</div>
          <div
            style={{
              height: '20px',
              width: '200px',
              backgroundColor: '#ded8d8',
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              border: '0.8px solid yellow',
            }}
          >
            <div
              style={{
                height: '20px',
                width: `${stat.base_stat * 2}px`,
                backgroundColor: '#ffcb05',
              }}
              className='flex items-center '
            >
              <span className='ml-3 text-gray-950'>{stat.base_stat}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ModalComponent = ({ showModal, closeModal, details }) => {
  return (
    <Modal
      open={showModal}
      onClose={closeModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          transform: 'translate(-50%, -50%)',
          '@media (max-width:600px)': {
            width: '90%',
            height: '90%',
            flexDirection: 'column',
            gap: '20px',
          },
        }}
        className='absolute top-2/4 left-2/4 trans w-[800px] bg-[#f5f5f5] border-[#ffcb05] outline-none shadow h-[500px] p-5 flex flex-row justify-between md:w-[90%] sm:w-[90%]  '
      >
        <div className='flex-1'>
          <StyledImage
            className='object-contain w-full max-h-[300px]'
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${details.id}.svg`}
            alt={details.id}
          />
          <div className='mt-5 ml-2'>
            <h2 className='font-bold text-xl mb-2 capitalize '>
              {details.name}
            </h2>
            <p className='text-gray-700 text-base capitalize'>
              ID: {details.id}
            </p>{' '}
            <p className='text-gray-700 text-base capitalize'>
              Type:{' '}
              {details.types &&
                details.types.map((t) => t.type.name).join(', ')}
            </p>{' '}
            <p className='text-gray-700 text-base capitalize mt-[6px]'>
              Abilities:{' '}
              {details.abilities &&
                details.abilities.map((t) => t.ability.name).join(', ')}
            </p>{' '}
            <p className='text-gray-700 text-base capitalize mt-[6px]'>
              height: {details.height}
            </p>{' '}
          </div>
        </div>
        <div className='flex-1 w-full flex flex-col justify-between items-end '>
          <BarChart stats={details.stats} />
          <Button
            onClick={closeModal}
            variant='contained'
            className='float-end font-bold'
            sx={{ background: '#ffcb05' }}
          >
            Close
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
