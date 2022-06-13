const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("node-cron");

const botToken = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const eventJson = [
  // Daily reset
  {
    cron: "30 22 * * 1-7",
    msg: {
      title: "Daily Reset",
      desc: "The server is reset bois. Get back to grinding and do your Dailies.",
      color: "#FD0061",
    },
  },

  // // Shadow lottery
  // {
  //   cron: "30 7 * * 1-6",
  //   msg: {
  //     title: "Shadow Lottery",
  //     desc: "Shadow lottery is up. Apply for Lottery to get Akiba's signets",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 13 * * 1-6",
  //   msg: {
  //     title: "Shadow Lottery",
  //     desc: "Shadow lottery is up. Apply for Lottery to get Akiba's signets",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 16 * * 1-6",
  //   msg: {
  //     title: "Shadow Lottery",
  //     desc: "Shadow lottery is up. Apply for Lottery to get Akiba's signets",
  //     color: "#A652BB",
  //   },
  // },

  // // Shadow contracts
  // {
  //   cron: "0 30 22 * * 1-6",
  //   msg: {
  //     title: "Shadow Contracts",
  //     desc: "1 Shadow Contract is reset. Do your Contract.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 22 * * 7",
  //   msg: {
  //     title: "Shadow Contracts",
  //     desc: "3 Shadow Contracts are reset. Do your Contracts.",
  //     color: "#A652BB",
  //   },
  // },

  // // Vault raid
  // {
  //   cron: "0 30 7 * * 1-7",
  //   msg: {
  //     title: "Vault Raid",
  //     desc: "Immortal's Vault is open. Lets go for their Vault raid.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 14 * * 1-7",
  //   msg: {
  //     title: "Vault Raid",
  //     desc: "Immortal's Vault is open. Lets go for their Vault raid.",
  //     color: "#A652BB",
  //   },
  // },

  // // Shadow assembly
  // {
  //   cron: "0 30 13 * * 1-6",
  //   msg: {
  //     title: "Shadow Assembly",
  //     desc: "Shadow Assembly is commencing now. Everyone get your Akiba's blessings. And your 15 Aspirant keys.",
  //     color: "#A652BB",
  //   },
  // },

  // // Rite of exile
  // {
  //   cron: "0 15 15 * * 7",
  //   msg: {
  //     title: "Rite of Exile",
  //     desc: "Rite of exile is commencing now in 15 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 20 15 * * 7",
  //   msg: {
  //     title: "Rite of Exile",
  //     desc: "Rite of exile is commencing now in 10 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 25 15 * * 7",
  //   msg: {
  //     title: "Rite of Exile",
  //     desc: "Rite of exile is commencing now in 5 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 15 * * 7",
  //   msg: {
  //     title: "Rite of Exile",
  //     desc: "Rite of exile is commencing now. Good luck bois.",
  //     color: "#A652BB",
  //   },
  // },

  // // Shadow War
  // {
  //   cron: "0 15 13 * * 4,6",
  //   msg: {
  //     title: "Shadow War",
  //     desc: "Shadow War is commencing now in 15 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 20 13 * * 4,6",
  //   msg: {
  //     title: "Shadow War",
  //     desc: "Shadow War is commencing now in 10 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 25 13 * * 4,6",
  //   msg: {
  //     title: "Shadow War",
  //     desc: "Shadow War is commencing now in 5 mins. Need all hands on Deck needed.",
  //     color: "#A652BB",
  //   },
  // },
  // {
  //   cron: "0 30 13 * * 4,6",
  //   msg: {
  //     title: "Shadow War",
  //     desc: "Shadow War is commencing now. Good luck bois.",
  //     color: "#A652BB",
  //   },
  // },

  // // Battlegrounds
  // {
  //   cron: "0 30 3 * * 1-7",
  //   msg: {
  //     title: "Battlegrounds",
  //     desc: "Battlegrounds is starting now. Do your daily 3 battlegrounds to get rewards.",
  //     color: "#F8C300",
  //   },
  // },
  // {
  //   cron: "0 30 7 * * 1-7",
  //   msg: {
  //     title: "Battlegrounds",
  //     desc: "Battlegrounds is starting now. Do your daily 3 battlegrounds to get rewards.",
  //     color: "#F8C300",
  //   },
  // },
  // {
  //   cron: "0 30 13 * * 1-7",
  //   msg: {
  //     title: "Battlegrounds",
  //     desc: "Battlegrounds is starting now. Do your daily 3 battlegrounds to get rewards.",
  //     color: "#F8C300",
  //   },
  // },
  // {
  //   cron: "0 30 17 * * 1-7",
  //   msg: {
  //     title: "Battlegrounds",
  //     desc: "Battlegrounds is starting now. Do your daily 3 battlegrounds to get rewards.",
  //     color: "#F8C300",
  //   },
  // },

  // // Zone events

  // // Haunted Carriage
  // {
  //   cron: "0 20 7 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 10 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 25 7 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 5 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 30 7 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage started in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 50 15 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 10 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 55 15 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 5 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 0 16 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting now in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 20 17 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 10 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 25 17 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting in 5 mins in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 30 17 * * 2,6",
  //   msg: {
  //     title: "Haunted Carriage",
  //     desc: "Haunted Carriage starting now in Ashwold Cemetery",
  //     color: "#00D166",
  //   },
  // },

  // // Ancient Arena
  // {
  //   cron: "0 50 16 * * 2,4,6,7",
  //   msg: {
  //     title: "Ancient Arena",
  //     desc: "Ancient Arena starting in 10 mins. Show your might and get amazing rewards.",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 55 16 * * 2,4,6,7",
  //   msg: {
  //     title: "Ancient Arena",
  //     desc: "Ancient Arena starting in 5 mins. Show your might and get amazing rewards.",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 0 17 * * 2,4,6,7",
  //   msg: {
  //     title: "Ancient Arena",
  //     desc: "Ancient Arena starting now. Show your might and get amazing rewards.",
  //     color: "#00D166",
  //   },
  // },

  // // Ancient Nightmare
  // {
  //   cron: "0 20 7 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 10 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 25 7 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 5 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 30 7 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 20 17 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 10 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 25 17 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 5 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 30 17 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 50 15 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 10 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 55 15 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in 5 mins in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
  // {
  //   cron: "0 0 16 * * 3,5",
  //   msg: {
  //     title: "Ancient Nightmare",
  //     desc: "Ancient Nightmare is starting now in Mist Valley in the middle of Mount Zavain",
  //     color: "#00D166",
  //   },
  // },
];

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let channel = client.channels.cache.get(`984038249825722368`);

  for (const event of eventJson) {
    console.log(`Scheduling for event ${event?.msg?.title}`);
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
          channel.send({ content: "<@&985513803905134672>", embeds: [embed] });
        }
      },
      {
        scheduled: true,
        timezone: "Asia/Kolkata",
      }
    );
  }
  console.log("Scheduled all events");

  setInterval(() => {
    const formatMemoryUsage = (data) =>
      `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;
    const memoryData = process.memoryUsage();
    const memoryUsage = {
      rss: `${formatMemoryUsage(
        memoryData.rss
      )} -> Resident Set Size - total memory allocated for the process execution`,
      heapTotal: `${formatMemoryUsage(
        memoryData.heapTotal
      )} -> total size of the allocated heap`,
      heapUsed: `${formatMemoryUsage(
        memoryData.heapUsed
      )} -> actual memory used during the execution`,
      external: `${formatMemoryUsage(
        memoryData.external
      )} -> V8 external memory`,
    };

    console.log(memoryUsage);
  }, 1000 * 10);
});

client.login(botToken);
