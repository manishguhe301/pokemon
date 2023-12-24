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

export default BarChart;
