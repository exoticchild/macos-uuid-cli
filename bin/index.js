#! /usr/bin/env node
const { exec } = require('child_process')
const os = require('os')
if (os.platform() === "darwin") {
exec(`ioreg -d2 -c IOPlatformExpertDevice | awk -F\\" '/IOPlatformUUID/{print $(NF-1)}'`, function(err, stdout, stderr) {
    if (err) {
        console.log(err)
        return
    }
    if (stderr) {
        console.log(stderr)
        return
    }
    console.log(stdout)
})
} else {
    console.log("Invalid platform!")
}