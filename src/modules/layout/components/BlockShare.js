import React from 'react'
import FacebookIcon from '../../../../static/images/face-icon.svg'
import TwitterIcon from '../../../../static/images/twitter-icon.svg'
import WhatsIcon from '../../../../static/images/whats-icon.svg'
import InstagramIcon from '../../../../static/images/instagram-icon.svg'
import ShareIcon from '../../../../static/images/share-icon.svg'
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

// import { StaticImage } from 'gatsby-plugin-image'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	// const image = getImage(opt.queryCard.childrenImageSharp[0])
	const { siteUrl, title } = opt
	return (
		<>
			<div className="wrapper-buttons">
				<span>Compartilhe</span>
				<div className="modal-share-button">
					<FacebookShareButton
						quote="Veja que incrível!"
						url={siteUrl}
						title={title}
					>
						<FacebookIcon />
					</FacebookShareButton>
					<TwitterShareButton url={siteUrl} title={title}>
						<TwitterIcon />
					</TwitterShareButton>

					<WhatsappShareButton url={siteUrl} title={title}>
						<WhatsIcon />
					</WhatsappShareButton>

					<TelegramShareButton url={siteUrl} title={title}>
						<ShareIcon />
					</TelegramShareButton>
				</div>
			</div>
		</>
	)
}

export default BlockImage
