import { createHyperscript, HyperscriptCreators, HyperscriptShorthands } from './hyperscript';
import { createEditor } from './creators';
/**
 * The default hyperscript factory that ships with Slate, without custom tags.
 */
declare const jsx: <S extends "anchor" | "cursor" | "editor" | "element" | "focus" | "fragment" | "selection" | "text">(tagName: S, attributes?: Object | undefined, ...children: any[]) => ReturnType<({
    anchor: typeof import("./creators").createAnchor;
    cursor: typeof import("./creators").createCursor;
    editor: (tagName: string, attributes: {
        [key: string]: any;
    }, children: any[]) => import("slate").BaseEditor;
    element: typeof import("./creators").createElement;
    focus: typeof import("./creators").createFocus;
    fragment: typeof import("./creators").createFragment;
    selection: typeof import("./creators").createSelection;
    text: typeof import("./creators").createText;
} | {
    anchor: typeof import("./creators").createAnchor;
    cursor: typeof import("./creators").createCursor;
    editor: (tagName: string, attributes: {
        [key: string]: any;
    }, children: any[]) => import("slate").BaseEditor;
    element: typeof import("./creators").createElement;
    focus: typeof import("./creators").createFocus;
    fragment: typeof import("./creators").createFragment;
    selection: typeof import("./creators").createSelection;
    text: typeof import("./creators").createText;
})[S]>;
export { jsx, createHyperscript, createEditor, HyperscriptCreators, HyperscriptShorthands, };
//# sourceMappingURL=index.d.ts.map