Maze.setMaze(tilemap`级别3`, "幽灵迷宫", function () {
    Maze.bornPlaceCR(2, 2)
    Maze.makeWeapon2(playground_helpers.randomWeapon(), sprites.dungeon.darkGroundCenter)
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("1幽灵", sprites.dungeon.darkGroundCenter)
        Maze.setMonstersMembers2("1幽灵持续", sprites.dungeon.darkGroundCenter)
    })
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("3幽灵", sprites.dungeon.darkGroundCenter)
    })
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("我的幽灵", sprites.dungeon.darkGroundCenter)
        Maze.setMonstersMembers2("大幽灵boss", sprites.dungeon.darkGroundCenter)
        Maze.setMonstersMembers2("3幽灵", sprites.dungeon.darkGroundCenter)
    })
    Maze.nextPortal2(sprites.dungeon.darkGroundCenter)
    Maze.nextMazeOfPortal(Maze.mazeKind.random)
})
function gamestart (character: string) {
    Player.createPlayer(character, 4, 4)
    Maze.newRandomMaze()
}
Weapon.setWeapons("武器", function () {
    Weapon.setWeapon(img`
        ................................
        ................................
        ................................
        ................................
        ..........aa.a..................
        ......baaaaaba..................
        acaacaacbbcaaa..................
        acbbbbbbbbaab...................
        acaaaabbbbbaa...................
        .....c44ceedce..................
        .......b.cedbe..................
        ........bbedbe..................
        ..........edde..................
        ..........eebe..................
        ...........eee..................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, "白板手枪", function (weapon) {
        Weapon.setWeaponP(weapon, Weapon.weaponP.damage, 0)
        Weapon.setWeaponP(weapon, Weapon.weaponP.cd, 800)
        Weapon.setWeaponP(weapon, Weapon.weaponP.angle, 45)
        Weapon.setWeaponDesc(weapon, "朱古力", "没有啥大用处")
        Weapon.setoffset(weapon, Weapon.dirKind.down, -3, 2)
        Weapon.setoffset(weapon, Weapon.dirKind.left, 0, 5)
        Weapon.setoffset(weapon, Weapon.dirKind.up, 3, 6)
        Weapon.setoffset(weapon, Weapon.dirKind.right, -2, 3)
        Weapon.weaponSkill(weapon, function (tempVar, sprite) {
            Bullet.shoot(weapon, "手枪子弹", weapon.x, weapon.y, 0, 75, 20)
        })
    })
})
Enemy.setEnemy(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, "小狗宠物", function (enemy) {
    Enemy.setEnemyAbility(enemy, Enemy.aKind.hp, 20)
    Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.walk, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.walk, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.walk, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.walk, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.stand, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.stand, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.stand, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.stand, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.attack, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.attack, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.attack, [img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 4 4 5 f . 
        . . . f 5 5 5 5 5 5 5 f f f . . 
        . . . f 5 4 5 f f f 5 f . . . . 
        . . . f f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `])
    Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.attack, [img`
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        f f . . f 5 5 5 4 4 5 5 5 f . . 
        f 5 f . f 6 5 5 f f 5 5 4 f . . 
        f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
        . f 5 4 4 5 5 5 5 5 5 4 f . . . 
        . . f f 5 5 4 5 5 5 5 5 f . . . 
        . . . f 5 f f 5 f f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 4 4 4 6 6 6 6 6 6 f . . . 
        . . f f f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 f f f 5 4 5 f . . . 
        . . . . f f . . f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 4 4 4 . . 
        . . . 4 5 5 5 e . . e 5 5 5 4 . 
        . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
        . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
        . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
        . . . e e 5 5 5 5 5 5 5 5 e e . 
        . . . . e 5 f 5 5 5 5 f 5 e . . 
        . f f . f 5 5 5 4 4 5 5 5 f . . 
        . f 5 f f 6 5 5 f f 5 5 4 . . . 
        . f 5 5 f 4 6 6 6 6 6 6 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f f f 5 f 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `])
    Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
        for (let index = 0; index < 2; index++) {
            playground_helpers.randomshoot(sprite, 2, -15, 15, 0.1, "幽灵粒子", 50, 3, 15, 75, 0)
        }
    })
    Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
        playground_helpers.multishoot(sprite, 6, 0, 15, 0.1, "幽灵粒子", 75, 4, 0, 0)
playground_helpers.multishoot(sprite, 6, -15, -15, 0.1, "幽灵粒子", 75, 4, 0, 0)
    })
    Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
        playground_helpers.multishoot(sprite, 1, -5, 0, 0.1, "幽灵粒子", 75, 8, 0, 0)
playground_helpers.multishoot(sprite, 1, 0, 0, 0.1, "幽灵粒子", 75, 8, 0, 0)
playground_helpers.multishoot(sprite, 1, 5, 0, 0.1, "幽灵粒子", 75, 8, 0, 0)
    })
    Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
        for (let index = 0; index < 4; index++) {
            playground_helpers.multishoot(sprite, 1, randint(-45, 45), 3, 0.1, "幽灵粒子", 75, 3, 0, 5)
        }
    })
    Enemy.dropWeapon(enemy, "小血瓶", 20)
})
Maze.setMaze(tilemap`级别1`, "荒漠", function () {
    Maze.bornPlaceCR(2, 2)
    Maze.makeWeapon2(playground_helpers.randomWeapon(), sprites.castle.tilePath5)
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("1幽灵", sprites.castle.tilePath5)
        Maze.setMonstersMembers2("1幽灵持续", sprites.castle.tilePath5)
    })
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("3幽灵", sprites.castle.tilePath5)
    })
    Maze.setMazeMonsters(function () {
        Maze.setMonstersMembers2("我的幽灵", sprites.swamp.swampTile1)
        Maze.setMonstersMembers2("大幽灵boss", sprites.swamp.swampTile1)
        Maze.setMonstersMembers2("3幽灵", sprites.swamp.swampTile1)
    })
    Maze.nextPortal2(sprites.castle.tilePath5)
    Maze.nextMazeOfPortal(Maze.mazeKind.random)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    blockMenu.setControlsEnabled(false)
    blockMenu.closeMenu()
    gamestart(option)
})
Reese()
lucas()
Jenny()
hanze()
dazun()
myknight_felix_dlc.dreadfulTeacher()
myknight_felix_dlc.forestBat()
myknight_felix_dlc.naughtyMonkey()
myknight_felix_dlc.poisonousSnake()
myknight_felix_dlc.room_dangerous_swamp()
blockMenu.showMenu(playground_helpers.getAllCharacters(), MenuStyle.List, MenuLocation.FullScreen)
Bullet.bulletOverlap("手枪子弹", Bullet.overlapKind.two, function (projectile, otherSprite) {
    Bullet.setHp(otherSprite, -100)
    otherSprite.say("不痛", 500)
    Bullet.bulletOwn(projectile).say("打不动", 500)
})
Bullet.setProjectiles("弹射物", function () {
    Bullet.setProjectile(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, "手枪子弹", function (projectile) {
        Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
        Bullet.setBullet(projectile, Bullet.bulletP.perishTogether, 10)
        Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 600)
        Bullet.setBullet(projectile, Bullet.bulletP.backoff, 50)
    })
})
