import React from 'react';
import "./AboutUs.css";
import Dosa from "../images2/dosa.jpg";

export const AboutUs = () => {
  return (

<>

<body className='body'>
<div className='image-section'>
				<img src={Dosa} className='myimage'/>
			</div>
	<div className='section'>
		<div class="container">
			<div class="content-section">
				<div class="title">
				
				</div>

				
				<div class="content">

			
			<div>
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<p>
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
					</div>
				</div>
				<div class="social">
					<a href="/"><i class="fab fa-facebook-f"></i></a>
					<a href="/"><i class="fab fa-twitter"></i></a>
					<a href="/"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			
		</div>
	</div>
	
	
</body>
</>




  )
}
