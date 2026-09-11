module.exports = {
	apps: [
		{
			name: "scramjet",
			script: "./src/index.js",
			cwd: __dirname,
			interpreter: "node",
			env: {
				NODE_ENV: "production",
				PORT: 4001,
			},
			autorestart: true,
			max_restarts: 10,
			min_uptime: "10s",
		},
	],
};
