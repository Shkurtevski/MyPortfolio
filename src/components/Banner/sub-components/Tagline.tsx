interface TaglineProps {
  text: string;
}

const Tagline = ({ text }: TaglineProps) => (
  <span className="tagline">{text}</span>
);

export default Tagline;
