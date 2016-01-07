// Description:
//  Restarts a hubot running on openshift
//
// Dependencies:
//   none
//
// Configuration:
//   none
//
// Commands:
//   hubot reset - Resets hubot
//
// Author:
//   SohumB
//

var spawn = require("child_process").spawn;

module.exports = function(robot) {
  var once = true;

  robot.brain.once("loaded", function() {
    var restartedBy = robot.brain.get("resetScheduled");
    if (restartedBy) {
      robot.send({ room: restartedBy }, "And we're up!");
      robot.brain.set("resetScheduled", null);
    }
  });

  robot.respond(/reset/, function(res) {
    robot.brain.set("resetScheduled", res.message.room);
    robot.brain.save();

    res.send("Gimme a sec...");

    var cart = process.env.HUBOT_TO_RESTART_CART || "nodejs-0.10";
    spawn("/usr/bin/gear", ["restart", "--cart", cart], {
      stdio: "ignore",
      detached: true
    }).unref();
  });
};
