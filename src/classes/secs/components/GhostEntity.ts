import {Component} from './Component';
import {MeshEntity} from './MeshEntity';

export class GhostEntity extends Component {
    _time: number = 0;
    override update(deltaTime: number, entity: any) {
        this._time += deltaTime;
        let mesh = entity.get(MeshEntity).mesh;
        mesh.position.y = Math.sin(this._time / 1000) * 0.1 + 1.75;
        // rotate slowly on the x axis
        mesh.rotation.y += Math.sin(this._time / 100) / 100;
    }
}
