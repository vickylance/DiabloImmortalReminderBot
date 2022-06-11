const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("node-cron");

const botToken = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", function (e) {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.login(botToken);

const eventJson = [
  {
    cron: "0 21 0 * * Sunday",
    msg: {
      desc: "Event Decripton",
      color: "#00FF00",
    },
  },
  {
    cron: "20 21 0 * * Sunday",
    msg: {
      title: "Event Name 2",
      desc: "Event Decripton 2",
    },
  },
];

client.on("ready", async () => {
  let channel = client.channels.cache.get(`983946396740767794`);

  for (const event of eventJson) {
    cron.schedule(
      event.cron,
      () => {
        if (channel) {
          const embed = new MessageEmbed()
            .setColor(event?.msg?.color || "#FF0000")
            .setTitle(event?.msg?.title || "Default Title")
            .setTimestamp()
            .setDescription(event?.msg?.desc || "Default Description");
          console.log(
            `Sending notification for event ${event?.title} and cron ${event?.cron}`
          );
          channel.send({ content: "<@&983946915781672971>", embeds: [embed] });
        }
      },
      {
        scheduled: true,
        timezone: "Asia/Kolkata",
      }
    );
  }
});
