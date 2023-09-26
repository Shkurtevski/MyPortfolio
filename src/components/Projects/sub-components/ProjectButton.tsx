interface Props {
  text: string;
  url: string;
  target: string;
}

const CustomButton = ({ text, url, target }: Props) => {
  return (
    <a href={url} target={target} rel="noopener noreferrer">
      <button className="vvd">
        <span>{text}</span>
      </button>
    </a>
  );
};

export default CustomButton;
