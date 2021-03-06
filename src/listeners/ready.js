const { Listener } = require("@sapphire/framework");

class Ready extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            once: true,
            event: "ready"
        });
    }

    async run(client) {
        const { username, id } = client.user;

        console.log("----------------------")
        this.container.logger.info(`Logged in as ${username} [${id}]`)
        /* await client.application.commands.set([]) */
    }
}

module.exports = { Ready };