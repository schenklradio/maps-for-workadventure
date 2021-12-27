/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

WA.onInit().then(() => {
    //TODO: Give a player the badge for entering the assemblyTiled
    WA.room.hideLayer('DJ-Set_above_player/Strobe');
});

WA.room.onEnterZone('strobe', () => {
    WA.room.showLayer('DJ-Set_above_player/Strobe');
});

WA.room.onLeaveZone('strobe', () => {
    WA.room.hideLayer('DJ-Set_above_player/Strobe');
});
