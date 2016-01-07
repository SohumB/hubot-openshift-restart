# hubot-openshift-restart

A hubot script that restarts hubots running on openshift

## Installation

In the hubot project repo, run:

`npm install hubot-openshift-restart --save`

Then add **hubot-openshift-restart** to your `external-scripts.json`:

```json
["hubot-openshift-restart"]
```

You may need to set `HUBOT_TO_RESTART_CART`, which defaults to `nodejs-0.10`

```sh
rhc env set HUBOT_TO_RESTART_CART=nodejs-0.11
```

## Sample Interaction

```
user1>> hubot reset
hubot>> Gimme a sec...
hubot>> And we're up!
```
