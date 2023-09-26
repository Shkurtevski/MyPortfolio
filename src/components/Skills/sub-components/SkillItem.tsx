interface SkillItemProps {
  icon: string;
  title: string;
}

const SkillItem = ({ icon, title }: SkillItemProps) => {
  return (
    <div className="item">
      <img src={icon} alt={title} />
      <h5>{title}</h5>
    </div>
  );
};

export default SkillItem;
