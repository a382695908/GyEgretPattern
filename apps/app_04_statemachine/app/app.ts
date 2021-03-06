///<reference path="../../../typings/main.d.ts"/>

import {AppFacade} from './facade/appFacade';


class App extends egret.DisplayObjectContainer {

    

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        
    }

    private onAddToStage(event: egret.Event) {
        this.createGameScene();
    }

   
    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene(): void {
        
        var key:string = 'GY_EGRET_PATTERN';
        
        var appFacade =  AppFacade.getInstance(key);
        appFacade.container = this;

        appFacade.startup(); 
    }   


}

egret.registerClass(App, "App");
window["App"] = App;

