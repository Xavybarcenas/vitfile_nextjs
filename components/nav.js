import styles from '/styles/nav.module.css';

export default function nav(){
    return (

        <div className={styles.container}>
		<div className={styles.menu_button}>Menu</div>
		<ul className={styles.flexnav} data-breakpoint="800">
			<li><a href="#">Home</a></li>
			<li>
				<a href="#">Portofolio</a>
				<ul>
					<li><a href="#">Web design</a></li>
					<li><a href="#">Web development</a></li>
					<li>
					<a href="#">Programming</a>
					</li>
					<li><a href="#">Identity</a></li>
					<li><a href="#">App Development</a></li>
				</ul>
			</li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</div>


    );
}



    