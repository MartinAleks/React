import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../index.css"

const Footer = () => {
    return (
        <footer className="bg-dark text-white my-footer mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="social-icons">
                            <a href="https://www.reddit.com/r/formula1/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faReddit} size="2x" />
                            </a>
                            <a href="https://www.youtube.com/@Formula1/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a href="https://open.spotify.com/show/44YvwJyqsCEEhNZBxuXZQ9/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faSpotify} size="2x" />
                            </a>
                            <a href="https://discord.com/channels/142082511902605313/360323936648560641/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faDiscord} size="2x" />
                            </a>
                            <a href="https://twitter.com/F1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
