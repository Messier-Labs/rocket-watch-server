const { send } = require('micro');

const upcomingLaunch = require('./upcoming-launch');

module.exports = (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return send(res, 200, upcomingLaunch);
}
