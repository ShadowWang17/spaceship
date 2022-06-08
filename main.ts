controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 7 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 8 7 . . . . . . . 
        . . . . . . 8 8 5 6 . . . . . . 
        . . . . . . 8 7 5 6 . . . . . . 
        . . . . . c c c 6 6 6 . . . . . 
        . . . . . 8 7 7 7 5 6 . . . . . 
        . . . . . f c c 6 6 f . . . . . 
        . . . . 8 6 6 7 7 7 7 5 . . . . 
        . . . . 8 8 6 6 7 7 7 5 . . . . 
        . . . . 8 8 6 6 7 7 7 7 . . . . 
        `, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Asteroid.destroy()
    mySprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let Asteroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "Apreta A per començar i B per disparar")
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`Space ship`, SpriteKind.Player)
mySprite.setPosition(75, 80)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdate(function () {
    Asteroid = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, 50, 50)
    Asteroid.x += 0
    Asteroid.setKind(SpriteKind.Enemy)
})
