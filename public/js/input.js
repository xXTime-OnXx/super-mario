import KeyboardState from "./KeyboardState.js";

export function setupKeyboard(entity) {
    const input = new KeyboardState();

    // jump
    input.addMapping('Space', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    // right
    input.addMapping('ArrowRight', keyState => {
        entity.go.dir = keyState;
    });

    // left
    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir = -keyState;
    });

    return input;
}

