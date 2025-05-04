/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61V227rxhX9lWBepRPxTkqAgZIURUnUxRIlylJQBCNyRFK8ajgURR/4IQkQFOcpD8dAEMCA3H5A8hKgbfIvsYuiz/6EgpYNHyDJiQuUT8PhcO21916z9lsQJ36GDFSC1luQYn8PCaqWpEwRaAEl32wQBnXgQAJBC5TtwHb7a5kxGRVTM0cg3n5WxGY5R2NN6DHdxYyb9ZYRYbUzcFUHab4OffsjgIkxMNxdZBrpOJXVtSlxpq52LH7bVGozlXWLkIisQtjxpDgDVxUi9LEfu1rqoQhhGBqoPIc+fh19+3xKus5mO93Dg6a3t0tb7A/LnAtC3vE0Qx2Mh9LetJdy134dfSaPMc7mQt7oDC1rP29DlVijfiyhmrhxyGXfceQw6EHELk/0M9+NkdNzUEx8Ur667ll/tpouarGxaQR5YwAbzEhpTySU9by9LylhnAWJVkr61pJeR3y8bqBacq6mqLMdri+DWJAavip3UbSz9K2i091ZfmGLA2Zqf0j8HD9rJfhf6i5102AEM2mT8hPi7YZwY5SEDfUV1lA492ap5GnUYLne0pPX0W80arY4sBJfmUKu1thqWaYFBz3oh958lIuMqpRZd+QMtU7xQh+SHH+MJWLZbbFZ52PPp8x+yDKSo47LFWr6A/ZSkA5NLrRCRbIOTp8Vc5+/GM+SDnUxY4UinO+0fTyce3tj3j30d+OGcXD41SjyJ2ePGQWo7DmgRV/VAUaunxEMiZ/E1R5DMXUAnb2JbIzIY3lBGx8u5u2i44lcrebyF3aH35hjbiSJ5/qoX8T2YGBs1NnwUFJnoA5SnNgoy5DT9TOS4HKIsgy6KAOtzx47VSWNUZQQ1PedSrY8L/KCJAlck/lT9mnhQZLBNP00RgTUwQYn0RCBFsE5qoPHH1iurTAqxalNRWxLAttuNyWVEwSKFjih02aqFKNT0JkfoYzAKAUtWuQEVhQlmruq/3948M0O2+x0KJmTGJahOJqleJFhOUaWJamtin/I4891EKMDOem4qj7L1MHGxxmZx3kaJtB5FvnzR2jbSR4Ts4xttVogDFr0yzYixI/drMosjyG2PX+P1CoP0NrAMENXdeCgvW+jCg84XXtCBnhowrG+7YVLP8GfG0XVQS+Jn47QFBIhzb1hbQq94Zqw+UaibfYNu2ZEihZ4mqIZUJXjZCHVP7+r6FV+GTD2YY7aruSJ4UotF8O5sqKnTflRlScpIoyc5yqvoR3k6SwJUPwRXEfsjJaasc+GF8Z0Gq2kiG5CddLAQu8D3JPEQevti22riVPhLRhdWfLWCFTdquL8Sg0tWvq1IGJYnQYPN9dfPtxcf/Nwc/3Vw837nz95uHn/j4eb66+rzU/ub6/vjz/eH9/d335199Nf7m6/uzv+9e747b/+flO9Hm/vj+9++f7+9ou749/ujt9WB4/vTkf+88P7f//zWCXw1N2KmoMI9MMMtIA60rfRWNa04YJjM1nXlcSVVVcGL2p4dpnTLR54oSVPaHU/3/f6QeruGJUcFFR0FulemSm6MGkanSJgrEPv7DdAQAtw3PZy7eFOz04b/kCyejlX6pupzEDfMg+HYp56YUMbLPuLuLswk7Rm1Aq9aVjTMaPGEMbzEjlKFLrRpL10JQpbcN9W5bMq2kmVHwbTk9GSFzmsWyyzMyeQLQIrGY1ZPqzNXDXenx9qYwqvfHWFhITrT+a7rtOftr3LNebXyxjRsHOZpONiYngzfhLN1tp55j7536P/hk9zz39yppOGNz56HCNP3f1DFbxcJ+qq/gHG02D6HckqJreyJtpogulBqa6MpUFcbE8uMsXarYt5Mc2Dc9Oz+6PQNsFV5RNpCMkmwVE1fqM1BHUQwozIL3bwWw5D1UFUymlqEkieXQTI1TNeOODqvx4UswdwCQAA';

const prefix = process.env.PREFIX || ',';
const mycode = process.env.CODE || "255";
const author = process.env.OWNER_NAME || 'KYLE';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '255756886492';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'false';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
