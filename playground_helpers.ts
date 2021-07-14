// 在此处添加您的代码
namespace playground_helpers {
    
    
    export function randomshoot (sprite: Sprite, n: number, amn: number, offset: number, delay: number, projectile: string, smn: number, k: number, amx: number, smx: number, d: number) {
        if (k > 0) {
            for (let index = 0; index <= n; index++) {
                Bullet.shoot(sprite, projectile, sprite.x, sprite.y, randint(amn, amx) + index * offset, randint(smn, smx), d)
            }
            Helper.after(delay, function () {
                randomshoot(sprite, n, amn + offset, offset, delay, projectile, smn, k - 1, amx, smx, d)
            })
        }
    }

    export function multishoot (sprite: Sprite, n: number, a: number, offset: number, delay: number, projectile: string, s: number, k: number, sadd1: number, sadd2: number) {
        if (k > 0) {
            for (let index2 = 0; index2 <= n; index2++) {
                Bullet.shoot(sprite, projectile, sprite.x, sprite.y, a + index2 * (360 / n), s + index2 * sadd1)
            }
            Helper.after(delay, function () {
                multishoot(sprite, n, a + offset, offset, delay, projectile, s + sadd2, k - 1, sadd1, sadd2)
            })
        }
    }

    export function randomWeapon() :string {
        let registeredWeapons = Object.keys(IntegrateGame.defExtSprite[Helper.extSpriteKind.Weapon])

        for (let k of registeredWeapons) {
            console.log(k)
        }

        return registeredWeapons[randint(0, registeredWeapons.length - 1)]
    }

    export function getAllCharacters() : string []{
        let characters = Object.keys(IntegrateGame.defExtSprite[Helper.extSpriteKind.Player])
        return characters
    }
} 