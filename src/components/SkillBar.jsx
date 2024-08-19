import React from 'react';

const SkillBar = ({ skill, percent }) => {
  const progressBarStyles = {
    width: '100%',
    height: '10px',
    backgroundColor: ' rgb(181 181 181)',
    borderRadius: '5px',
    marginBottom: '10px',
    position: 'relative',
  };

  const fillerStyles = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: '#000',
    borderRadius: 'inherit',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div>
      <div className='skil_main_div'>
        <span className='skil_text'>{skill}</span>
        <span className='skil_progress'>{percent}%</span>
      </div>
      <div style={progressBarStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default SkillBar;
