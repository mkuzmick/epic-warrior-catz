#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log(`epic cat generator III is working`)

const folder = `/Users/mk/Development/epic-warrior-catz/public/catz/tail-stripes`

const myFiles = fs.readdirSync(folder)

for (let i = 0; i < myFiles.length; i++) {
    const element = myFiles[i];
    const oldName = path.join(folder, element)
    const newName = path.join(folder, `${path.basename(folder)}-${i+1}.png`)
    fs.renameSync(oldName, newName)
    console.log(`going to change ${oldName} to ${newName}`)
}
