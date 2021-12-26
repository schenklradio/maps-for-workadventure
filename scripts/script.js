WA.onInit().then(() => {
    WA.chat.sendChatMessage("Hello There");
    WA.room.hideLayer('DJ-Set_above_player/Strobe');
});

WA.room.onEnterLayer('DJ-Set_above_player/Strobe').subscribe(() => {
    WA.chat.sendChatMessage("Strobe Lights activated");
    WA.room.showLayer('DJ-Set_above_player/Strobe');
});

WA.room.onLeaveLayer('DJ-Set_above_player/Strobe').subscribe(() => {
    WA.room.hideLayer('DJ-Set_above_player/Strobe');
});
