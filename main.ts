basic.forever(function () {
    music.setTempo(120)
    for (let index = 0; index < 20; index++) {
        music.rest(music.beat(BeatFraction.Quarter))
        if (input.lightLevel() < 80) {
            music.playTone(131, music.beat(BeatFraction.Half))
        } else {
            if (input.lightLevel() < 160) {
                music.playTone(220, music.beat(BeatFraction.Half))
            } else {
                music.playTone(698, music.beat(BeatFraction.Half))
            }
        }
    }
})
