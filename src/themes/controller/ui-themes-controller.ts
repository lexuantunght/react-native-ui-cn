import { DEFAULT_THEME } from '../provider/context';
import { ThemeProviderValue } from '../types';
import { COLORS } from '../../static/styles/colors';

class UIThemesController {
    private theme: ThemeProviderValue;
    constructor() {
        this.theme = DEFAULT_THEME;
    }

    setTheme(value: ThemeProviderValue) {
        this.theme = value;
    }

    getTheme() {
        return this.theme;
    }

    get Colors() {
        return COLORS;
    }
}

const _UIThemesController = new UIThemesController();
export default _UIThemesController;
