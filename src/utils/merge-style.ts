export const mergeStyle = <T extends {}>(...styles: Array<T | false | null | undefined | {}>) => {
    const style = [];
    for (const item of styles) {
        if (item !== false && item !== null && item !== undefined) {
            style.push(item);
        }
    }
    return style;
};
