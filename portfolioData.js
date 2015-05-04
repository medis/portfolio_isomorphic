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

module.exports = PortfolioData;