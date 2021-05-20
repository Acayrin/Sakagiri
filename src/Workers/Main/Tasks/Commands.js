const bot = require('../../Main')
const db = bot.client.database

module.exports = {
    name: 'proc_cmd',
    exec() {
        setInterval(() => {
            const wkrs = db.get('Workers')
            const cmds = db.get('Commands')
            const worker = wkrs[Math.floor(Math.random() * wkrs.length)]

            if (worker && cmds.length > 0) {
                worker.postMessage(cmds.shift())
                db.set('Commands', cmds)
            }
        }, 50)
    }
}