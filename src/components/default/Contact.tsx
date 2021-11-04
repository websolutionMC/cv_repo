import styled from "styled-components";

import { BsTelephone } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const List = styled.ul`
    position: relative;
    margin: 0;
    padding: 0;

  li {
    position: relative;
    list-style: none;
    margin: 10px 0;
  }
`;

const ContactStyled = styled.div`

`;

const Icon = styled.span`
  display: inline-block;
  width: 30px;
  font-size: 18px;
  color: #03a9fa;
`;

const Text = styled.span`
  font-weight: normal;
`;

interface Data {
  data: any
};

const Contact: React.FC<Data> = ({ data }) => {

  const infoAboutContact = data;

  return (
    <ContactStyled>
      <List>
        <li>
          <Icon>
            <BsTelephone />
          </Icon>
          <Text>{infoAboutContact.phone}</Text>
        </li>
        <li>
          <Icon>
            <MdOutlineAlternateEmail />
          </Icon>
          <Text>{infoAboutContact.email}</Text>
        </li>
        <li>
          <a
            href={`https://github.com/${infoAboutContact.git}/`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>
              <FiGithub />
            </Icon>
          </a>
          <Text>
            <a
              href={`https://github.com/${infoAboutContact.git}/`}
              target="_blank"
              rel="noreferrer"
            >
              {infoAboutContact.git}
            </a>
          </Text>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/in/${infoAboutContact.linkedin.link}/`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>
              <AiOutlineLinkedin />
            </Icon>
          </a>
          <Text>
            <a
              href={`https://www.linkedin.com/in/${infoAboutContact.linkedin.link}/`}
              target="_blank"
              rel="noreferrer"
            >
              {infoAboutContact.linkedin.text}
            </a>
          </Text>
        </li>
        <li>
          <Icon>
            <HiOutlineLocationMarker />
          </Icon>
          <Text>{infoAboutContact.city}</Text>
        </li>
      </List>
    </ContactStyled>
  )
}

export default Contact;