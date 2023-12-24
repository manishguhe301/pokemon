import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalComponent from './ModalComponent';

const Card = ({ pokemon }) => {
  const { name } = pokemon;
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getDetails = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div
        className='max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-xl m-2 bg-white border-2 border-gray-300 transform transition duration-500 ease-in-out hover:scale-105 p-4'
        onClick={() => setShowModal(true)}
      >
        <img
          className='w-full h-48 object-contain'
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${details.id}.svg`}
          alt={name}
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 capitalize'>{name}</div>
          <p className='text-gray-700 text-base'>ID: {details.id}</p>
          <p className='text-gray-700 text-base capitalize'>
            Type:{' '}
            {details.types && details.types.map((t) => t.type.name).join(', ')}
          </p>
        </div>
      </div>
      <ModalComponent
        showModal={showModal}
        details={details}
        closeModal={() => setShowModal(false)}
      />
    </>
  );
};

export default Card;
