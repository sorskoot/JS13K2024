import {_LEVELHEIGHT, _LEVELWIDTH, Game} from '../../Game';
import {_GRID_CORRIDOR} from '../../HotelFloor';
import {lerp, vec2} from '../../Maths';
import {Entity} from '../Entity';
import {Secs} from '../secs';
import {Component} from './Component';
import {MeshEntity} from './MeshEntity';

enum AIType {
    Blinky,
    Pinky,
    Inky,
    Clyde,
}
enum direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

const _SPEED = 2;

export class AI extends Component {
    _id: number;
    _type: AIType = AIType.Blinky;
    private _targetPos: vec2 = new vec2();
    private _pos: vec2 = new vec2();
    private _d: direction = 0;
    private _t!: vec2 | number;
    private _attackCallback= () => {};


    constructor(i: number, x: number, y: number, attackCallback: () => void) {
        super();
        // set random type
        this._type = ~~(Math.random() * 4);
        this._attackCallback = attackCallback;
        // register to hotel floor
        Game.instance._hotelFloor.e.set(i, {x, y});

        this._id = i;
        this._pos.x = this._targetPos.x = x;
        this._pos.y = this._targetPos.y = y;
    }

    private _time = _SPEED;

    override update(dt: number, e: Entity) {
        const pp = Game.instance._playerGridPos;
        this._time += dt / 1000;

        // time to retarget?
        if (this._time >= _SPEED) {
            // Get the next location
            this._pos.x = this._targetPos.x;
            this._pos.y = this._targetPos.y;
            this._targetPos = this._getTargetPos(pp);
            Game.instance._hotelFloor.e.set(this._id, this._targetPos);
            this._time = 0;
        } else {
            // Move towards the target
            const x = lerp(this._pos.x, this._targetPos.x, this._time / _SPEED);
            const y = lerp(this._pos.y, this._targetPos.y, this._time / _SPEED);
            e.get(MeshEntity)._mesh.position.x = x * 3;
            e.get(MeshEntity)._mesh.position.z = y * 3;

            if (this._pos.x === this._targetPos.x && this._pos.y === this._targetPos.y) {
                this._time = _SPEED;
            }
        }

        const dist = BABYLON.Vector2.Distance(
            {x: e.get(MeshEntity)._mesh.position.x, y: e.get(MeshEntity)._mesh.position.z},
            {x: Game.instance._playerGridPos.x * 3, y: Game.instance._playerGridPos.y * 3}
        );
        if (dist <= 3) {
            //console.log(`ATTACK! ${this._id}, ${dist}`);
            this._attackCallback();
        }
    }

    private _getTargetPos(pp: vec2): vec2 {
        switch (this._type) {
            case AIType.Blinky:
                return this._blinkyMove(pp);
            case AIType.Pinky:
                return this._pinkyMove(pp);
            case AIType.Inky:
                // find a Blinky to follow;
                if (!this._t) {
                    const _blinkies = Game.instance._secs
                        .match(AI)
                        .map((x) => x.get(AI))
                        .filter((a) => a._type === AIType.Blinky && a._id !== this._id);
                    this._t = _blinkies[~~(Math.random() * _blinkies.length)]?._id;
                }
                return this._inkyMove(pp, Game.instance._hotelFloor.e.get(this._t as number));
            case AIType.Clyde:
                // pick a corner
                this._t = this._t ?? {
                    x: Math.random() < 0.5 ? 0 : _LEVELWIDTH,
                    y: Math.random() < 0.5 ? 0 : _LEVELHEIGHT,
                };
                return this._clydeMove(pp, this._t);
        }
    }

    _blinkyMove(player: vec2) {
        let x = 0;
        if (this._pos.x < player.x) x = 1;
        if (this._pos.x > player.x) x = -1;
        // check if possible to move in that direction
        // if so, return that direction otherwise check up and down
        if (x != 0 && this._canGoThere(x, 0)) {
            return {x: this._pos.x + x, y: this._pos.y};
        }

        let y = 0;
        if (this._pos.y < player.y) y = 1;
        if (this._pos.y > player.y) y = -1;
        if (y != 0 && this._canGoThere(0, y)) {
            return {x: this._pos.x, y: this._pos.y + y};
        }

        return {x: this._pos.x, y: this._pos.y};
    }

    private _canGoThere(x: number, y: number): boolean {
        const hf = Game.instance._hotelFloor;

        let go = (hf.g[this._pos.x + x]?.[this._pos.y + y] ?? '') == _GRID_CORRIDOR;

        for (const [key, value] of hf.e.entries()) {
            if (key !== this._id && value.x === this._pos.x + x && value.y === this._pos.y + y) {
                go = false;
            }
        }
        return go;
    }

    _pinkyMove(player: vec2) {
        let target = {x: player.x, y: player.y};
        switch (~~(Math.random() * 4)) {
            case 0:
                target.y -= 4;
                break;
            case 1:
                target.y += 4;
                break;
            case 2:
                target.x -= 4;
                break;
            case 3:
                target.x += 4;
                break;
        }
        return this._blinkyMove(target);
    }

    _inkyMove(player, blinky) {
        let target = {x: player.x, y: player.y};
        // Calculate a position relative to both Pac-Man and Blinky
        if (blinky) {
            // if the blinky is gone, just follow the player
            target.x = player.x + (player.x - blinky.x);
            target.y = player.y + (player.y - blinky.y);
        }
        return this._blinkyMove(target);
    }

    _clydeMove(player, scatterCorner) {
        let distanceToPlayer2 = this._distanceToPlayer(player);
        let target = distanceToPlayer2 < 64 ? player : scatterCorner;
        return this._blinkyMove(target);
    }

    private _distanceToPlayer(player: vec2) {
        return (player.x - this._pos.x) ** 2 + (player.y - this._pos.y) ** 2;
    }

    override dispose() {
        Game.instance._hotelFloor.e.delete(this._id);
    }
}
