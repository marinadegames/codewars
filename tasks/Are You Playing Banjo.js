areYouPlayingBanjo = (name) => name[0].toLowerCase() === 'r' ? `${name} plays banjo` : name + ' does not play banjo'

console.log(areYouPlayingBanjo('Mick'))