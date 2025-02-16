/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
				port: "",
				pathname: "/**",
			},
		],
	},
	
}

module.exports = nextConfig
