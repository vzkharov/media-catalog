/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/:path*{/}?',
				headers: [
					{
						key: 'X-Accel-Buffering',
						value: 'no',
					},
				],
			},
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'is1-ssl.mzstatic.com',
				port: '',
				pathname: '/image/thumb/**',
			},
		],
	},
}

export default nextConfig
