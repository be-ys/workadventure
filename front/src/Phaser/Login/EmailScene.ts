import {gameManager} from "../Game/GameManager";
import {SelectCharacterSceneName} from "./SelectCharacterScene";
import {ResizableScene} from "./ResizableScene";
import {emailSceneVisibleStore} from "../../Stores/EmailSceneStore";

export const EmailSceneName = "EmailScene";

export class EmailScene extends ResizableScene {

    private email: string = '';

    constructor() {
        super({
            key: EmailSceneName
        });
        this.email = gameManager.getPlayerEmail() || '';
    }

    preload() {
    }

    create() {
        emailSceneVisibleStore.set(true);
    }

    public setEmail(email: string): void {
        email = email.trim();
        gameManager.setPlayerEmail(email);

        this.scene.stop(EmailSceneName)
        gameManager.tryResumingGame(this, SelectCharacterSceneName);
        this.scene.remove(EmailSceneName);
        emailSceneVisibleStore.set(false);
    }

    update(time: number, delta: number): void {
    }

    public onResize(): void {
    }
}
