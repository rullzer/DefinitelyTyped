// Type definitions for Photoshop JavaScript API 25.0
// Project: https://adobe.io/photoshop/uxp
// Definitions by:  Adobe Photoshop <https://github.com/adobe-photoshop>
//                  Barkin Aygun <https://github.com/baaygun>
//                  Heewoo Ahn <https://github.com/heewooa>
//                  Jaroslav Bereza <https://github.com/jardicc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { photoshopAction, photoshopCore } from "./dom/CoreModules";
import { imaging as photoshopImaging } from "./dom/ImagingModule";
import * as photoshopConstants from "./dom/Constants";
/**
 * Root of the DOM, the `app` object where you can access application settings,
 * open documents and reach rest of the APIs
 */
export declare const app: import("./dom/Photoshop").Photoshop;
/**
 * The set of lower level APIs for directly interfacing with Photoshop UI and user
 */
export declare const core: typeof photoshopCore;
/**
 * The set of lower level APIs for interfacing with the action system, including `batchPlay`,
 * evolution of `executeAction`
 */
export declare const action: typeof photoshopAction;
/**
 * The different constants and enumerations that DOM APIs expect as certain parameters
 */
export declare const constants: typeof photoshopConstants;
/**
 * The Imaging API allows JavaScript to work directly with image data in Photoshop documents.
 */
export declare const imaging: typeof photoshopImaging;
declare const _default: {
    app: import("./dom/Photoshop").Photoshop;
    core: typeof photoshopCore;
    action: typeof photoshopAction;
    constants: typeof photoshopConstants;
    imaging: typeof photoshopImaging;
};
export default _default;
