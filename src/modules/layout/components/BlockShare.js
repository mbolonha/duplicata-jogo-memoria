import React from 'react'
import FacebookIcon from '../../../../static/images/face-icon.svg'
import TwitterIcon from '../../../../static/images/twitter-icon.svg'
import WhatsIcon from '../../../../static/images/whats-icon.svg'
import ShareIcon from '../../../../static/images/share-icon.svg'
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'
const BlockImage = ({ opt }) => {
	const { url, title } = opt
	return (
		<>
			<div className="wrapper-buttons">
				<span>Compartilhe</span>
				<div className="modal-share-button">
					<FacebookShareButton
						quote="Veja que incrível!"
						url={url}
						title={title}
					>
						<FacebookIcon />
					</FacebookShareButton>
					<TwitterShareButton url={url} title={title}>
						<TwitterIcon />
					</TwitterShareButton>
					<WhatsappShareButton url={url} title={title}>
						<WhatsIcon />
					</WhatsappShareButton>
					<TelegramShareButton url={url} title={title}>
						<ShareIcon />
					</TelegramShareButton>
				</div>
			</div>
		</>
	)
}

export default BlockImage
