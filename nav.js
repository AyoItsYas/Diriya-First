// Navbar HTML

const nav_html = `
            <input
				type="checkbox"
				id="check" />
			<label class="logo">DIRIYA CO-OP BUSINESS BANK</label>
			<label
				for="check"
				class="checkbtn">
				<i class="fas fa-bars"></i>
			</label>
			<ul>
				<li>
					<a
						href="index.php"
						>Home</a
					>
				</li>
				<li><a href="home.html">Home</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="services.html">Services</a></li>
				<li><a href="contact.html">Contact </a></li>
				
				
				
				<li>
					<a
						class="ctn"
						href="contact.html"
						>Contact</a
					>
				</li>
			</ul>
`;

// Insert the HTML into the DOM nav.navbar

const nav = document.querySelector("nav.navbar");
nav.innerHTML = nav_html;

// Footer HTML

const footer_html =`
<p>61, Wattegedara Road, Maharagama | TEL +94 113 677 123 | FAX- +94 113 677 138 | diriyabank@gmail.com</p>
<p> Registered Under the CO-OP Act. No.5 of 1972 </p>
`;

// Insert the HTML into the DOM section.footer

const footer = document.querySelector("section.footer");
footer.innerHTML = footer_html;
