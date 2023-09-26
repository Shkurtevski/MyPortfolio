import React from 'react'

interface SkillTextProps{
    skillTitle: string;
    skillParagraph: string;
}

const SkillText = ({skillTitle, skillParagraph}: SkillTextProps) => {
  return (
    <React.Fragment>
      <h2>{skillTitle}</h2>
      <p>
        {skillParagraph}
      </p>
    </React.Fragment>
  );
}

export default SkillText