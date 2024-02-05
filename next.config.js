const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
});

const configOptions = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		scrollRestoration: true,
	},
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			net: false,
			dns: false,
			child_process: false,
			tls: false,
		};

		return config;
	},
	i18n: {
		locales: ['uk', 'en'],
		defaultLocale: 'uk',
	},
};

/** @type {import('next').NextConfig} */
const nextConfig = process.env.MODE === 'dev' ? configOptions : withPWA(configOptions);
// const nextConfig = configOptions;

module.exports = nextConfig;
