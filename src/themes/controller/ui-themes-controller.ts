import { DEFAULT_THEME } from '../provider/context';
import { ThemeMode } from '../types';

class UIThemesController {
    private mode: ThemeMode;
    constructor() {
        this.mode = DEFAULT_THEME.mode;
    }

    setMode(value: ThemeMode) {
        this.mode = value;
    }

    getMode() {
        return this.mode;
    }
}

const _UIThemesController = new UIThemesController();
export default _UIThemesController;
