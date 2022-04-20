import headerStyles from "../styles/Header.module.css";
function Header() {
	return (
		<div>
			<h1 className={headerStyles.title}>
				WebDev <span>Newz</span>
			</h1>
			<p className={headerStyles.description}>
				keep up to date the latest web dev news
			</p>
		</div>
	);
}

export default Header;
