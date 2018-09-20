import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon
} from 'react-share';

const Footer = () => {
    const shareUrl='https://doptadog.herokuapp.com/';
    return <div className="container">
      <footer>
        <p>Copyright &copy; Monica Wojciechowski, 2018. Source code on &nbsp;
          <a href="https://github.com/monicawoj/adopt-a-dog.git">GitHub</a>
        </p>
        <p>
          Powered by &nbsp;
          <a href="https://petfinder.com">Petfinder.com</a>
        </p>
        <div className='flex-row'>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </footer>
    </div>
};

export default Footer;
