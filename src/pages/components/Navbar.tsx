import { motion } from 'framer-motion';

const Navbar = () => {
	return (

			<div className="bg-white sticky top-0 p-2">
		<motion.nav 
			initial={{ 
				x: -500,
				opacity: 0,
				scale: 0.5,
			 }}

			animate={{
				x: 0,
				opacity: 1,
				scale: 1,
			}}

			transition={{
				duration: 1,
				type: 'spring',
				// stiffness: 100,
			}}

			 >


				<div className="flex gap-4 max-w-7xl mx-auto">
					<div>
						<a href="/">
							Home
							</a>
					</div>
				<div>
						<a href="#API">
							API
							</a>
					</div>
				<div>
						<a href="mailto:jchadwick@firstam.com">
							Contact
							</a>
					</div>

				</div>

		</motion.nav>
			</div>
	)
}


export default Navbar