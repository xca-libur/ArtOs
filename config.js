module.exports = {
	/* The token of your Discord Bot */
	token: "XXXXXXXXXXX",
	/* For the support server */
	support: {
		id: "819201666699100182", // The ID of the support server
		logs: "819201668066967635", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "231eyPinr9ee5Kfa5fBHgPsa0rllZ0TY", // Your discord client secret
		baseURL: "https://artisticsoff.herokuapp.com/", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "xcalibur", // Express session password (it can be what you want)
		failureURL: "https://" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "XCALIBUR | 🗡️" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "591558773953396739", // The ID of the bot's owner
		name: "ＸＣＡＬＩＢＵＲ🗡#6969" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "", // Founder's github account
		donate: "" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@XALIBUR online on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "my Discord : ＸＣＡＬＩＢＵＲ🗡#6969",
			type: "PLAYING"
		}
	]
};
