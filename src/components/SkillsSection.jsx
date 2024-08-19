import React from 'react';
import SkillBar from './SkillBar';

const skills = [
  { skill: 'User experience (UX) ', percent: 60 },
  { skill: 'User interface design ', percent: 70 },
  { skill: 'Figma ', percent: 65 },
  { skill: 'React.js ', percent: 50 },
  { skill: 'HyperText Markup Language (HTML) ', percent: 100 },
  { skill: 'Cascading Style Sheets (CSS) ', percent: 80 },
  { skill: 'JavaScript (JS) ', percent: 80 },
  { skill: 'Hypertext Preprocessor (PHP) ', percent: 70 },
  { skill: 'My Structured Query Language (MYSQL) ', percent: 75 },
  { skill: 'Google Workspace ', percent: 100 },



];

const SkillsSection = () => {
  return (
    <section className="session_5">

    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 className='sklil_tital'>Core Design Skills</h2>
      <p className='skil_para'>
      I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ width: '48%', marginBottom: '20px' }}>
            <SkillBar skill={skill.skill} percent={skill.percent} />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SkillsSection;
