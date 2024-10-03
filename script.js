AOS.init();

var typed = new Typed("#typing", {
	strings: ["Web Developer", "Graphic Designer"],
	typeSpeed: 180,
	backSpeed: 50,
	loop: true,
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuActive = document.querySelector(".hamburger-clicked");
const mobileMenu = document.querySelector(".mobile-menu");
const frontPage = document.querySelector(".header");

const toggleMenu = () => {
	mobileMenu.classList.toggle("menu-active");
};

let flag = 0;

const toggleMenufunc = () => {
	flag = 0;
	toggleMenu();
};

hamburgerMenu.addEventListener("click", () => {
	flag = 1;
	toggleMenu();
});

hamburgerMenuActive.addEventListener("click", () => {
	flag = 0;
	toggleMenu();
});

window.addEventListener("scroll", () => {
	if (flag === 1) {
		flag = 0;
		toggleMenu();
	}
});

const sendEmail = () => {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	const serviceId = "service_34j6vfp";
	const templateId = "template_jotny88";

	emailjs
		.send(serviceId, templateId, params)
		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			console.log(res);
			alert("Message Sent Successfully");
		})
		.catch((err) => console.log(err));
};