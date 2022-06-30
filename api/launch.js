const upcomingLaunch = require('../upcoming-launch');

module.exports = (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json(upcomingLaunch);
}
