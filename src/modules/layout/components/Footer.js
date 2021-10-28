import { React } from '../dependencies'
// import { StaticImage } from 'gatsby-plugin-image'
// import FooterMainMenuContainer from '../containers/FooterMainMenuContainer'

const Footer = ({ socialIcons, logoImg, refState, handleRefState }) => {
	// const { instagram } = socialIcons
	// const { facebook } = socialIcons
	// const { linkedin } = socialIcons
	// const { pinterest } = socialIcons
	// const { footerMenuzim } = socialIcons
	// console.log(footerMenuzim.childImageSharp.fixed.src)
	return (
		<>
			<footer>
				<div className="social-icons">
					<a href="https://google.com">
						Face
						{/* <Img
              fixed={instagram.childImageSharp.fixed}
              width={instagram.childImageSharp.fixed.width}
              height={instagram.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
					</a>
					<a href="https://google.com">
						Face
						{/* <Img
              fixed={facebook.childImageSharp.fixed}
              width={facebook.childImageSharp.fixed.width}
              height={facebook.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
					</a>
					<a href="https://google.com">
						Face
						{/* <Img
              fixed={linkedin.childImageSharp.fixed}
              width={linkedin.childImageSharp.fixed.width}
              height={linkedin.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
					</a>
					<a href="https://google.com">
						Face
						{/* <Img
              fixed={pinterest.childImageSharp.fixed}
              width={pinterest.childImageSharp.fixed.width}
              height={pinterest.childImageSharp.fixed.height}
              alt="Develop with Gatsby"
              title="Gatsby"
            /> */}
					</a>
				</div>
				<div className="main-footer">
					{/* <div className="footer-columns">
						<a href="https://google.com" className="footer-subscribe">
							<strong>Torne-se um Membro</strong>
						</a>
					</div> */}
					<div className="footer-columns">
						<ul className="footer-menu">
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Info
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Contato
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									FAQ
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Link Item
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Link Item
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Link Item
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Link Item
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-columns">
						<ul className="footer-menu">
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Sobre
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Nossa História
								</a>
							</li>
							<li className="footer-links">
								<a href="/wiki/alesp" className="footer-link">
									Link
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Facebook
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Pinterest
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									Instagram
								</a>
							</li>
							<li className="footer-links">
								<a href="https://google.com" className="footer-link">
									© {new Date().getFullYear()}, Edu4Dev mudar
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			{/*
			<div className="footer-menu-fixed-bottom mobile-only">
				<div className="footer-main-header">
					<div className="footer-header-columns toggle-menu">
						<input
							type="checkbox"
							id="footer-check-toggle-icon"
							onChange={handleRefState}
						/>
						<label
							htmlFor="footer-check-toggle-icon"
							className="menu-wrapper contact-button"
						>
							<strong>Suprimentos</strong>
						</label>
					</div>

					<div className="footer-header-columns">
						<p>
							<strong>
								<a href="/credits/image-credits/" className="cart-link">
									<strong className="contact-button"> Fale Conosco{` `}</strong>
								</a>
							</strong>
						</p>
					</div>
				</div>

				<FooterMainMenuContainer
					refState={refState}
					handleRefState={handleRefState}
				/>
			</div> */}
		</>
	)
}

export default Footer
