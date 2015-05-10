'use strict';

var PortfolioData = new Array();

PortfolioData.push({
	images: [
	  '/images/portfolio/yti/yti_logo.png',
	  '/images/portfolio/yti/1.JPG',
	  '/images/portfolio/yti/2.JPG',
	  '/images/portfolio/yti/3.JPG',
	],
	tags: [
		'yti'
	],
	name: "yti",
	full_name: "Youtalk-Insurance",
	href: "http://youtalk-insurance.com",
	text: "<p>This website required not only Drupal side of things done but also setting up the server. For server, Nginx was set up with MariaDB and Redis for caching. Nginx is configured to look up for Drupal's boost cache first and if failed - only then hit Drupal. Drupal itself is cached with boost, views cache and Redis. Server resources are used at bare minimum with this setup and 1k+ daily users. As for frontend, Susy2 SASS framework is used to help with responsive design. This site is fully responsive.</p>",
});

PortfolioData.push({
	images: [
	  '/images/portfolio/medava/medava_logo.png',
	  '/images/portfolio/medava/0.JPG',
	  '/images/portfolio/medava/1.JPG',
	  '/images/portfolio/medava/1.JPG',
	],
	tags: [
		'medava'
	],
	name: "medava",
	full_name: "Medava",
	href: "http://medava.co.uk",
	text: "<p>This project required not only setting up and managing server but also to build a fast shop alike system which excluded payments, instead notifying responsible persons for order request.</p>",
});

PortfolioData.push({
	images: [
	  '/images/portfolio/condor/condor_logo.png',
	  '/images/portfolio/condor/0.JPG',
	  '/images/portfolio/condor/1.JPG',
	],
	tags: [
		'condor'
	],
	name: "condor",
	full_name: "Condor Gold",
	href: "http://condorgold.com",
	text: "<p>plafeholder</p>",
});

PortfolioData.push({
	images: [
	  '/images/portfolio/scmdirect/logo.png',
	  '/images/portfolio/scmdirect/0.JPG',
	  '/images/portfolio/scmdirect/1.JPG',
	  '/images/portfolio/scmdirect/2.JPG',
	],
	tags: [
		'scmdirect'
	],
	name: "scmdirect",
	full_name: "SCM Direct",
	href: "http://scmdirect.com/",
	text: "<p>plafeholder</p>",
});

PortfolioData.push({
	images: [
	  '/images/portfolio/circum/logo.png',
	  '/images/portfolio/circum/0.JPG',
	  '/images/portfolio/circum/1.JPG',
	],
	tags: [
		'circum'
	],
	name: "circum",
	full_name: "Circum Minerals",
	href: "http://circumminerals.com/",
	text: "<p>plafeholder</p>",
});

PortfolioData.push({
	images: [
	  '/images/portfolio/brockmansgin/logo.png',
	  '/images/portfolio/brockmansgin/0.JPG',
	  '/images/portfolio/brockmansgin/1.JPG',
	],
	tags: [
		'brockmansgin'
	],
	name: "brockmansgin",
	full_name: "Brockmans Gin",
	href: "http://brockmansgin.com/",
	text: "<p>plafeholder</p>",
});

module.exports = PortfolioData;