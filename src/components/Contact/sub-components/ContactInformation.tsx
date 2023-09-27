import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

interface Props {
  phoneNumber: string;
  email: string;
  linkedin: string;
  github: string;
  gitlab: string;
}

const ContactInformation = ({
  phoneNumber,
  email,
  linkedin,
  github,
  gitlab,
}: Props) => {
  return (
    <div className="contact-wrapper">
      <h6>
        <MdPhone className="contact-icons phone-icon" />
        {phoneNumber}
      </h6>
      <h6>
        <MdEmail className="contact-icons email-icon" />
        {email}
      </h6>
      <h6>
        <FaLinkedin className="contact-icons linkedin-icon" />
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
      </h6>
      <h6>
        <FaGithub className="contact-icons github-icon" />
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </h6>
      <h6>
        <FaGitlab className="contact-icons gitlab-icon" />
        <a href={gitlab} target="_blank" rel="noopener noreferrer">
          {gitlab}
        </a>
      </h6>
    </div>
  );
};

export default ContactInformation;
