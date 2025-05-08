/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: () => [
		{
			source: '/auth/yandex',
			destination: 'http://localhost:4200/auth/yandex'
		},
		{
			source: '/auth/google',
			destination: 'http://localhost:4200/auth/google'
		},
		{
			source: '/auth/github',
			destination: 'http://localhost:4200/auth/github'
		}
	],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com'
			},
			{
				protocol: 'https',
				hostname: 'avatars.yandex.net'
			}
		]
	}
}

module.exports = nextConfig
