import {Game, SCALE} from './Game';
import {vec2} from './Maths';
// prettier-ignore
const cube = {
'atlas': 
{"positions":[1.5,0.5,-0.5,1.5,1.5,-0.5,1.5,1.5,-1.5,1.5,0.5,-1.5,-0.5,0.5,-1.5,-0.5,1.5,-1.5,-1.5,1.5,-1.5,-1.5,0.5,-1.5,-1.5,0.5,0.5,-1.5,1.5,0.5,-1.5,1.5,1.5,-1.5,0.5,1.5,0.9,1.2,1.5,0.5,1.5,1.5,1.5,1.5,1.5,1.5,0.5,1.5,-0.5,-1.5,0.5,-1.5,-1.5,0.5,-1.5,-1.5,1.5,-0.9,-1.5,1.5,0.5,1.5,0.5,1.5,1.5,0.5,1.5,1.5,1.5,1.5,1.5,1.5,0.5,1.5,1.5,0.9,-1.5,1.5,0.9,-0.5,1.5,1.5,-0.5,1.5,1.5,-1.5,1.5,-1.5,-1.5,0.5,-1.5,-0.5,0.5,-1.5,-0.5,1.5,-1.5,-1.5,0.5,-1.5,-1.5,1.5,-0.5,-1.5,-1.5,-0.5,-0.5,-1.5,-1.5,-0.5,-1.5,-1.5,-1.5,-1.5,1.5,-1.5,-0.5,1.5,-0.5,-0.5,1.5,-0.5,-1.5,1.5,-1.5,-1.5,1.5,-0.5,1.5,1.5,0.5,1.5,1.5,0.5,0.5,1.5,-0.5,1.5,1.5,-0.5,0.5,1.5,-1.5,1.5,1.5,-0.5,1.5,1.5,-1.5,1.5,1.5,-1.5,0.5,-1.5,-0.5,-1.5,-1.5,0.5,-1.5,-1.5,0.5,-0.5,-1.5,-0.5,-1.5,-1.5,-0.5,-0.5,-1.5,-1.5,-1.5,-1.5,-0.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-0.5,-1.5,-1.5,0.5,0.5,1.5,-1.5,1.5,1.5,-1.5,1.5,1.5,-0.5,1.5,1.5,-0.5,0.5,1.5,-0.5,1.5,1.5,-0.5,-0.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-0.5,-0.5,-1.5,-1.5,-1.5,-1.5,-0.5,-0.5,-1.5,-0.5,-1.5,-1.5,-0.5,-1.5,0.5,-1.5,-1.5,1.5,-1.5,-1.5,1.5,-0.5,-1.5,0.5,-1.5,1.5,0.5,1.5,1.5,1.5,1.5,1.5,1.5,0.5,1.5,0.5,1.5,1.5,1.5,0.5,1.5,1.5,0.5,1.5,-1.5,-0.5,0.5,-1.5,-0.5,0.5,-1.5,0.5,1.5,-1.5,-0.5,1.5,-1.5,0.5,1.5,-1.5,-1.5,0.5,-1.5,-1.5,1.5,-1.5,-1.5,1.5,-1.5,-0.5,-0.5,-1.5,-1.5,-1.5,1.5,-0.5,-0.5,1.5,-0.5,-0.5,1.5,0.5,-1.5,1.5,-0.5,-1.5,1.5,0.5,-1.5,1.5,-1.5,-0.5,1.5,-1.5,-1.5,1.5,-0.5,-0.5,1.5,-1.5,-0.5,1.5,-1.5,1.5,-0.5,-1.5,1.5,0.5,-1.5,0.5,0.5,-1.5,1.5,-0.5,-1.5,0.5,-0.5,-1.5,1.5,-1.5,-1.5,1.5,-0.5,-1.5,0.5,-1.5,-1.5,0.5,-1.5,-1.5,0.5,-1.5,-1.5,-1.5,-0.5,1.5,-1.5,0.5,1.5,-0.9,1.2,1.5,-1.5,-0.5,1.5,-0.9,-0.5,1.5,0.9,1.2,1.5,0.9,-0.5,1.5,0.9,-0.5,1.6,0.9,1.2,1.5,0.9,1.2,1.6,-1.5,-1.5,1.5,-1.5,-0.5,1.5,-0.9,-1.5,1.5,0.9,-0.5,1.5,0.9,-1.5,1.5,0.9,-1.5,1.6,0.9,-0.5,1.5,-1.5,1.5,0.5,-0.5,1.5,1.5,-1.5,1.5,0.5,-1.5,1.5,1.5,0.5,1.5,1.5,0.5,1.5,1.5,1.5,-1.5,0.5,0.9,-1.5,1.5,1.5,-1.5,0.5,1.5,-1.5,1.5,-1.5,0.5,1.5,-1.5,1.5,1.5,-0.5,1.5,1.5,-1.5,0.5,1.5,-0.5,1.5,1.5,-0.5,1.5,1.5,1.5,0.5,-1.5,1.5,1.5,-1.5,0.5,1.5,-1.5,1.5,0.5,-1.5,0.5,1.5,-1.5,0.5,1.5,-1.5,0.71,1.01,1.6,0.71,-0.5,1.6,0.71,-0.5,1.3,0.71,1.01,1.3,0.71,-1.5,1.6,0.71,-1.5,1.3,-0.9,-1.5,1.5,-0.9,-0.5,1.5,-0.9,-0.5,1.6,-0.9,-1.5,1.6,-0.72,-1.5,1.3,-0.72,-0.5,1.3,0.71,-0.5,1.3,0.71,-0.5,1.3,0.71,-1.5,1.3,-0.9,-0.5,1.5,-0.9,1.2,1.5,-0.9,1.2,1.6,-0.9,-0.5,1.5,-0.72,1.01,1.3,0.71,1.01,1.3,0.71,1.01,1.3,0.71,-0.5,1.3,0.71,1.01,1.6,-0.72,1.01,1.6,-0.9,1.2,1.6,0.71,1.01,1.6,-0.9,1.2,1.6,0.9,1.2,1.6,-0.72,-0.5,1.6,-0.9,-0.5,1.6,-0.9,-0.5,1.6,-0.9,1.2,1.6,0.71,-0.5,1.6,0.71,1.01,1.6,0.9,1.2,1.6,0.71,-0.5,1.6,0.9,1.2,1.6,0.9,-0.5,1.6,-0.72,-1.5,1.6,-0.9,-1.5,1.6,-0.9,-1.5,1.6,-0.9,-0.5,1.6,0.71,-1.5,1.6,0.71,-0.5,1.6,0.9,-0.5,1.6,0.71,-1.5,1.6,0.9,-0.5,1.6,0.9,-1.5,1.6,-0.72,1.01,1.6,0.71,1.01,1.6,0.71,1.01,1.3,-0.72,1.01,1.6,-0.72,1.01,1.3,-0.72,-1.5,1.6,-0.72,-0.5,1.6,-0.72,-0.5,1.3,-0.72,-1.5,1.6,-0.72,-0.5,1.3,-0.72,-1.5,1.3,-0.72,-0.5,1.6,-0.72,1.01,1.6,-0.72,1.01,1.3,-0.72,-0.5,1.6,-0.72,-0.5,1.3,0.71,-1.5,1.6,-0.72,-1.5,1.6,-0.72,-1.5,1.3,0.71,-1.5,1.3],"uvs":[0.16,0.91,0.16,1,0.25,1,0.25,0.91,0.16,0.91,0.16,1,0.25,1,0.25,0.91,0.08,0.91,0.08,1,0,1,0,0.91,0.8,0.97,0.83,1,0.75,1,0.75,0.91,0.41,0.83,0.5,0.83,0.5,0.75,0.45,0.75,0.58,0.83,0.5,0.83,0.5,0.75,0.5,0.75,0.58,0.75,0.8,0.75,0.8,0.83,0.75,0.83,0.75,0.75,0.08,0.75,0.08,0.83,0,0.83,0.08,0.75,0,0.75,0.16,0.75,0.16,0.83,0.25,0.83,0.25,0.75,0.16,0.75,0.16,0.83,0.25,0.83,0.25,0.75,0,0.83,0,0.91,0.08,0.91,0,0.83,0.08,0.83,0,0.75,0,0.83,0,0.75,0.08,0.75,0.25,0.83,0.25,0.91,0.16,0.91,0.25,0.83,0.16,0.83,0.25,0.75,0.25,0.83,0.25,0.75,0.16,0.75,0.08,0.75,0.58,1,0.5,1,0.5,0.91,0.5,0.91,0.58,0.91,0.5,0.91,0.41,1,0.5,1,0.5,0.91,0.41,1,0.5,0.91,0.41,0.91,0.5,0.91,0.25,0.91,0.25,1,0.16,1,0.25,0.91,0,0.91,0,1,0.08,1,0,0.91,0.08,1,0.08,1,0.25,0.91,0.33,0.91,0.33,0.83,0.25,0.91,0.25,0.83,0.25,1,0.33,1,0.25,1,0.25,0.91,0.41,1,0.75,0.91,0.66,0.91,0.66,0.83,0.75,0.91,0.75,0.83,0.75,1,0.66,1,0.75,0.91,0.66,1,0.66,1,0,0.83,0,0.91,0.08,0.91,0,0.83,0.08,0.83,0,0.75,0,0.83,0.08,0.75,0.08,0.75,0.08,0.75,1,0.83,1,0.91,0.95,0.97,1,0.83,0.95,0.83,0.12,0.73,0.12,0.59,0.11,0.59,0.12,0.73,0.11,0.73,1,0.75,1,0.83,0.95,0.75,0.12,0.59,0.12,0.51,0.11,0.51,0.12,0.59,0.75,0.83,0.66,0.75,0.75,0.83,0.75,0.75,0.58,0.75,0.58,0.75,0.25,0.83,0.3,0.75,0.25,0.83,0.25,0.75,1,0.91,1,1,0.91,1,1,0.91,0.91,1,0.91,1,0,0.91,0,1,0.08,1,0,0.91,0.08,1,0.08,1,0.11,0.72,0.11,0.59,0.14,0.59,0.14,0.72,0.11,0.51,0.14,0.51,0.12,0.51,0.12,0.59,0.11,0.59,0.11,0.51,0.93,0.75,0.93,0.83,0.81,0.83,0.81,0.83,0.81,0.75,0.12,0.59,0.12,0.73,0.11,0.73,0.12,0.59,0.93,0.95,0.81,0.95,0.81,0.95,0.81,0.83,0.06,0.72,0.18,0.72,0.2,0.73,0.06,0.72,0.2,0.73,0.05,0.73,0.18,0.59,0.2,0.59,0.2,0.59,0.2,0.73,0.06,0.59,0.06,0.72,0.05,0.73,0.06,0.59,0.05,0.73,0.05,0.59,0.18,0.51,0.2,0.51,0.2,0.51,0.2,0.59,0.06,0.51,0.06,0.59,0.05,0.59,0.06,0.51,0.05,0.59,0.05,0.51,0.18,0.62,0.06,0.62,0.06,0.64,0.18,0.62,0.18,0.64,0.11,0.51,0.11,0.59,0.14,0.59,0.11,0.51,0.14,0.59,0.14,0.51,0.11,0.59,0.11,0.72,0.14,0.72,0.11,0.59,0.14,0.59,0.56,0.86,0.68,0.86,0.68,0.88,0.56,0.88],"indices":[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,23,24,25,26,27,25,27,28,26,12,15,26,15,27,29,30,31,32,31,33,30,8,11,30,11,31,34,35,36,34,36,37,35,4,7,35,7,36,38,39,40,38,40,41,39,0,3,39,3,40,42,43,44,45,44,46,46,44,0,46,0,39,47,48,46,49,46,50,50,46,39,50,39,38,51,52,53,54,53,55,55,53,8,55,8,30,56,57,55,58,55,59,59,55,30,59,30,60,61,62,63,61,64,65,65,66,21,65,21,20,67,68,69,70,71,72,72,73,17,72,17,16,74,75,76,77,76,53,53,76,9,53,9,8,78,79,80,81,82,44,44,83,1,44,1,0,84,85,86,87,86,88,85,72,16,85,16,86,89,90,85,91,85,92,90,93,72,90,72,85,94,95,96,97,96,98,95,65,20,95,20,96,99,100,95,99,95,101,102,61,65,103,65,95,104,105,106,107,106,108,108,106,4,108,4,35,109,110,108,109,108,111,112,108,35,113,35,34,114,115,116,117,116,118,119,120,121,122,121,123,124,125,118,124,118,126,127,128,129,130,129,121,131,96,132,133,132,134,96,20,135,96,136,132,137,86,138,139,138,140,86,16,19,86,19,138,141,142,143,144,145,116,116,146,13,116,13,12,147,148,149,150,151,106,106,152,5,106,5,4,153,154,155,153,155,156,154,157,158,154,158,155,159,160,161,159,161,162,163,164,165,163,166,167,168,169,170,171,170,161,164,172,173,164,174,175,176,177,178,179,180,181,177,182,183,177,184,185,186,187,188,189,190,191,182,192,193,182,194,195,196,197,198,199,200,201,202,203,204,205,204,206,207,208,209,210,211,212,213,214,215,216,215,217,218,219,220,218,220,221]}
};

const _GRID_WALL = 'w';
const _GRID_START = 's';
const _GRID_END = 'e';
export const _GRID_CORRIDOR = 'c';

const _WALL_MESH = '';
const _CUBE_MESH = '';
const _CUBE_MATERIAL = '';
const _FLOOR_MESH = '';
const _CEILING_MESH = '';
const _FLOOR_ROOT = '';

export class HotelFloor {
    /**
     * The grid of the maze
     */
    public g: string[][];

    /**
     * The walls of the maze
     */
    public w: BABYLON.AbstractMesh[] = [];

    //enemy array
    public e: Map<number, vec2> = new Map();

    private _scene: BABYLON.Scene;
    private _params: {width: number; height: number};
    private _game: Game;
    private _baseCube!: BABYLON.Mesh;
    private _floorRoot: BABYLON.TransformNode;

    constructor(game: Game, scene: BABYLON.Scene, params: {width: number; height: number}) {
        this._scene = scene;
        this._params = params;
        this._game = game;
        this.g = this._createGrid(params.width, params.height);
        this._floorRoot = new BABYLON.TransformNode(_FLOOR_ROOT, this._scene);
        this._createBaseMeshes();
        this._generateMaze();
        this._createMeshesFromGrid();

        //#ifdef DEBUG
        this._gridDebugger();
        //#endif
    }

    /**
     * Check if a position is valid
     */
    public _validPosition(x: number, y: number): boolean {
        const p = this.g[x][y];

        if (p === _GRID_WALL || p === _GRID_START || p === _GRID_END) {
            return false;
        }
        // Maybe check for distance of start and if there are any ghosts in the way

        return true;
    }

    //#ifdef DEBUG
    private _gridDebugger() {
        // create a string from the current grid
        let gridString = '';
        for (let x = 0; x < this.g.length; x++) {
            for (let y = 0; y < this.g[x].length; y++) {
                switch (this.g[x][y]) {
                    case _GRID_CORRIDOR:
                        gridString += '███';
                        break;
                    case _GRID_START:
                        gridString += '█S█';
                        break;
                    case _GRID_END:
                        gridString += '█E█';
                        break;
                    default:
                        gridString += '   ';
                        break;
                }
            }
            gridString += '\n';
        }
        console.log(gridString);
    }
    //#endif

    private _createBaseMeshes() {
        this._baseCube = new BABYLON.Mesh(_CUBE_MESH, this._scene);

        const vertexData = new BABYLON.VertexData();

        vertexData.positions = cube.atlas.positions;
        vertexData.indices = cube.atlas.indices;
        vertexData.uvs = cube.atlas.uvs;
        vertexData.applyToMesh(this._baseCube);

        const cubeMat = new BABYLON.StandardMaterial(_CUBE_MATERIAL, this._scene);
        this._baseCube.position.y = -500;
        cubeMat.diffuseTexture = this._game.textures.t[0];
        this._baseCube.material = cubeMat;
    }

    // Create an empty grid filled with walls
    private _createGrid(width: number, height: number): string[][] {
        let grid: string[][] = [];
        for (let x = 0; x < width; x++) {
            let row: string[] = [];
            for (let y = 0; y < height; y++) {
                row.push(_GRID_WALL);
            }
            grid.push(row);
        }
        return grid;
    }

    // Generate a maze using recursive backtracking
    private _generateMaze() {
        const {width, height} = this._params;

        // Start the maze generation from the top-left corner
        this._carvePassagesFrom(0, 0);

        // Place start and end points
        this.g[0][0] = _GRID_START;
        this.g[width - 1][height - 1] = _GRID_END;
    }

    private _carvePassagesFrom(cx: number, cy: number) {
        const directions = [
            [0, 1], // North
            [1, 0], // East
            [0, -1], // South
            [-1, 0], // West
        ];

        // Shuffle directions to ensure a random maze
        this._shuffleArray(directions);

        for (const direction of directions) {
            const nx = cx + direction[0] * 2;
            const ny = cy + direction[1] * 2;

            if (this._isInBounds(nx, ny) && this.g[nx][ny] === _GRID_WALL) {
                this.g[nx][ny] = _GRID_CORRIDOR;
                this.g[cx + direction[0]][cy + direction[1]] = _GRID_CORRIDOR;
                this._carvePassagesFrom(nx, ny);
            }
        }
    }

    private _isInBounds(x: number, y: number): boolean {
        const {width, height} = this._params;
        return x >= 0 && x < width && y >= 0 && y < height;
    }

    private _shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Convert the grid into BabylonJS meshes
    private _createMeshesFromGrid() {
        for (let x = 0; x < this.g.length; x++) {
            for (let y = 0; y < this.g[x].length; y++) {
                if (this.g[x][y] === _GRID_CORRIDOR || this.g[x][y] === _GRID_START || this.g[x][y] === _GRID_END) {
                    this._createCorridor(x * SCALE, y * SCALE);
                }
                if (this.g[x][y] === _GRID_WALL) {
                    this.w.push(this._createWallInstance(x * SCALE, y * SCALE));
                }
            }
        }
        // add a ring of walls around the maze
        for (let x = 0; x < this._params.width; x++) {
            this._createWallInstance(x * SCALE, -SCALE);
            this._createWallInstance(x * SCALE, this._params.height * SCALE);
        }
        for (let x = 0; x < this._params.height; x++) {
            this._createWallInstance(-SCALE, x * SCALE);
            this._createWallInstance(SCALE * this._params.width, x * SCALE);
        }
    }
    private _createWallInstance(x: number, y: number): BABYLON.AbstractMesh {
        const c = this._baseCube.createInstance(_WALL_MESH);
        c.checkCollisions = true;
        c.position.set(x, 1.5, y);
        c.rotate(BABYLON.Axis.Y, Math.PI * ~~(Math.random() * 4));
        c.parent = this._floorRoot;
        c.isPickable = true;
        return c;
    }

    private _createCorridor(x: number, y: number) {
        let c = this._baseCube.createInstance(_FLOOR_MESH);
        c.checkCollisions = true;
        c.position.set(x, -1.5, y);
        c.parent = this._floorRoot;

        c = this._baseCube.createInstance(_CEILING_MESH);
        c.position.set(x, 4.5, y);
        c.parent = this._floorRoot;
    }
}
