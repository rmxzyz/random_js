var Scratch;
function findReactComponent(element) {
let fiber = element[Object.keys(element).find(key => key.startsWith("__reactInternalInstance$"))];
if (fiber == null) return null;

const go = fiber => {
let parent = fiber.return;
while (typeof parent.type == "string") {
    parent = parent.return;
}
return parent;
};
fiber = go(fiber);
while(fiber.stateNode == null) {
fiber = go(fiber);
}
return fiber.stateNode;
}
window.vm = findReactComponent(document.getElementsByClassName("stage-header_stage-size-row_14N65")[0]).props.vm;


// This is for compatibility with plugin loaders that don't implement window.Scratch.
// This is a one-time exception. Similar code like this WILL NOT be accepted in new extensions without
// significant justification.
if (!Scratch) {
Scratch = {
//@ts-expect-error
TargetType: {
SPRITE: '_sprite_',
STAGE: '_stage_',
MOUSE: '_mouse_',
},
// @ts-expect-error
BlockType: {
COMMAND: 'command',
STACK: 'command',
REPORTER: 'reporter',
BOOLEAN: 'Boolean',
HAT: 'hat'
},
// @ts-expect-error
ArgumentType: {
STRING: 'string',
NUMBER: 'number',
COLOR: 'color',
ANGLE: 'angle',
BOOLEAN: 'Boolean',
MATRIX: 'matrix',
NOTE: 'note'
},
// @ts-expect-error
vm: window.vm,
extensions: {
unsandboxed: true,
register: (object) => {
  // @ts-expect-error
  const serviceName = vm.extensionManager._registerInternalExtension(object);
  // @ts-expect-error
  vm.extensionManager._loadedExtensions.set(object.getInfo().id, serviceName);
}
}
};
}
var BlockType = Scratch.BlockType;
var ArgumentType = Scratch.ArgumentType;
var TargetType = Scratch.TargetType;
//transform
//var microee = require('microee');
function M() { this._events = {}; }
M.prototype = {
  on: function(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function(ev, cb) {
    var e = this._events[ev] || [], i;
    for(i = e.length-1; i >= 0 && e[i]; i--){
      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }
    }
  },
  removeAllListeners: function(ev) {
    if(!ev) { this._events = {}; }
    else { this._events[ev] && (this._events[ev] = []); }
  },
  listeners: function(ev) {
    return (this._events ? this._events[ev] || [] : []);
  },
  emit: function(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];
    for(i = e.length-1; i >= 0 && e[i]; i--){
      e[i].apply(this, args);
    }
    return this;
  },
  when: function(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function(ev, cb, when) {
    if(!cb) return this;
    function c() {
      if(!when) this.removeListener(ev, c);
      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function(dest) {
  var o = M.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}
var microee = M;
microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

    Filter = require('./filter.js');
//Minilog : main
var log = new Transform(),
    slice = Array.prototype.slice;

exports = function create(name) {
  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };
  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };
  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };
  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };
  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };
  o.log   = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;

exports.pipe = function(dest) {
  return log.pipe(dest);
};

exports.end = exports.unpipe = exports.disable = function(from) {
  return log.unpipe(from);
};

exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();

exports.enable = function() {
  if(exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
              .pipe(exports.defaultFormatter) // formatter
              .pipe(exports.defaultBackend); // backend
  }
  return log.pipe(exports.suggest) // filter
            .pipe(exports.defaultBackend); // formatter
};

//--------------------------------------------------------------
const StringUtil = require('../util/string-util'); //string util
//Minilog
const minilog = require('minilog');
minilog.enable();


//const log = require('../util/log');
//const {loadSvgString, serializeSvgToString} = require('scratch-svg-renderer');

const loadVector_ = function (costume, runtime, rotationCenter, optVersion) {
    return new Promise(resolve => {
        let svgString = costume.asset.decodeText();
        // SVG Renderer load fixes "quirks" associated with Scratch 2 projects
        if (optVersion && optVersion === 2) {
            // scratch-svg-renderer fixes syntax that causes loading issues,
            // and if optVersion is 2, fixes "quirks" associated with Scratch 2 SVGs,
            const fixedSvgString = serializeSvgToString(loadSvgString(svgString, true /* fromVersion2 */));
        
            // If the string changed, put back into storage
            if (svgString !== fixedSvgString) {
                svgString = fixedSvgString;
                const storage = runtime.storage;
                costume.asset.encodeTextData(fixedSvgString, storage.DataFormat.SVG, true);
                costume.assetId = costume.asset.assetId;
                costume.md5 = `${costume.assetId}.${costume.dataFormat}`;
            }
        }

        // createSVGSkin does the right thing if rotationCenter isn't provided, so it's okay if it's
        // undefined here
        costume.skinId = runtime.renderer.createSVGSkin(svgString, rotationCenter);
        costume.size = runtime.renderer.getSkinSize(costume.skinId);
        // Now we should have a rotationCenter even if we didn't before
        if (!rotationCenter) {
            rotationCenter = runtime.renderer.getSkinRotationCenter(costume.skinId);
            costume.rotationCenterX = rotationCenter[0];
            costume.rotationCenterY = rotationCenter[1];
            costume.bitmapResolution = 1;
        }

        resolve(costume);
    });
};

const canvasPool = (function () {
    /**
     * A pool of canvas objects that can be reused to reduce memory
     * allocations. And time spent in those allocations and the later garbage
     * collection.
     */
    class CanvasPool {
        constructor () {
            this.pool = [];
            this.clearSoon = null;
        }

        /**
         * After a short wait period clear the pool to let the VM collect
         * garbage.
         */
        clear () {
            if (!this.clearSoon) {
                this.clearSoon = new Promise(resolve => setTimeout(resolve, 1000))
                    .then(() => {
                        this.pool.length = 0;
                        this.clearSoon = null;
                    });
            }
        }

        /**
         * Return a canvas. Create the canvas if the pool is empty.
         * @returns {HTMLCanvasElement} A canvas element.
         */
        create () {
            return this.pool.pop() || document.createElement('canvas');
        }

        /**
         * Release the canvas to be reused.
         * @param {HTMLCanvasElement} canvas A canvas element.
         */
        release (canvas) {
            this.clear();
            this.pool.push(canvas);
        }
    }

    return new CanvasPool();
}());

/**
 * Return a promise to fetch a bitmap from storage and return it as a canvas
 * If the costume has bitmapResolution 1, it will be converted to bitmapResolution 2 here (the standard for Scratch 3)
 * If the costume has a text layer asset, which is a text part from Scratch 1.4, then this function
 * will merge the two image assets. See the issue LLK/scratch-vm#672 for more information.
 * @param {!object} costume - the Scratch costume object.
 * @param {!Runtime} runtime - Scratch runtime, used to access the v2BitmapAdapter
 * @param {?object} rotationCenter - optionally passed in coordinates for the center of rotation for the image. If
 *     none is given, the rotation center of the costume will be set to the middle of the costume later on.
 * @property {number} costume.bitmapResolution - the resolution scale for a bitmap costume.
 * @returns {?Promise} - a promise which will resolve to an object {canvas, rotationCenter, assetMatchesBase},
 *     or reject on error.
 *     assetMatchesBase is true if the asset matches the base layer; false if it required adjustment
 */
const fetchBitmapCanvas_ = function (costume, runtime, rotationCenter) {
    if (!costume || !costume.asset) { // TODO: We can probably remove this check...
        return Promise.reject('Costume load failed. Assets were missing.');
    }
    if (!runtime.v2BitmapAdapter) {
        return Promise.reject('No V2 Bitmap adapter present.');
    }

    return Promise.all([costume.asset, costume.textLayerAsset].map(asset => {
        if (!asset) {
            return null;
        }

        if (typeof createImageBitmap !== 'undefined') {
            return createImageBitmap(
                new Blob([asset.data], {type: asset.assetType.contentType})
            );
        }

        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = function () {
                resolve(image);
                image.onload = null;
                image.onerror = null;
            };
            image.onerror = function () {
                reject('Costume load failed. Asset could not be read.');
                image.onload = null;
                image.onerror = null;
            };
            image.src = asset.encodeDataURI();
        });
    }))
        .then(([baseImageElement, textImageElement]) => {
            const mergeCanvas = canvasPool.create();

            const scale = costume.bitmapResolution === 1 ? 2 : 1;
            mergeCanvas.width = baseImageElement.width;
            mergeCanvas.height = baseImageElement.height;

            const ctx = mergeCanvas.getContext('2d');
            ctx.drawImage(baseImageElement, 0, 0);
            if (textImageElement) {
                ctx.drawImage(textImageElement, 0, 0);
            }
            // Track the canvas we merged the bitmaps onto separately from the
            // canvas that we receive from resize if scale is not 1. We know
            // resize treats mergeCanvas as read only data. We don't know when
            // resize may use or modify the canvas. So we'll only release the
            // mergeCanvas back into the canvas pool. Reusing the canvas from
            // resize may cause errors.
            let canvas = mergeCanvas;
            if (scale !== 1) {
                canvas = runtime.v2BitmapAdapter.resize(mergeCanvas, canvas.width * scale, canvas.height * scale);
            }

            // By scaling, we've converted it to bitmap resolution 2
            if (rotationCenter) {
                rotationCenter[0] = rotationCenter[0] * scale;
                rotationCenter[1] = rotationCenter[1] * scale;
                costume.rotationCenterX = rotationCenter[0];
                costume.rotationCenterY = rotationCenter[1];
            }
            costume.bitmapResolution = 2;

            // Clean up the costume object
            delete costume.textLayerMD5;
            delete costume.textLayerAsset;

            return {
                canvas,
                mergeCanvas,
                rotationCenter,
                // True if the asset matches the base layer; false if it required adjustment
                assetMatchesBase: scale === 1 && !textImageElement
            };
        })
        .finally(() => {
            // Clean up the text layer properties if it fails to load
            delete costume.textLayerMD5;
            delete costume.textLayerAsset;
        });
};

const loadBitmap_ = function (costume, runtime, _rotationCenter) {
    return fetchBitmapCanvas_(costume, runtime, _rotationCenter)
        .then(fetched => {
            const updateCostumeAsset = function (dataURI) {
                if (!runtime.v2BitmapAdapter) {
                    // TODO: This might be a bad practice since the returned
                    // promise isn't acted on. If this is something we should be
                    // creating a rejected promise for we should also catch it
                    // somewhere and act on that error (like logging).
                    //
                    // Return a rejection to stop executing updateCostumeAsset.
                    return Promise.reject('No V2 Bitmap adapter present.');
                }

                const storage = runtime.storage;
                costume.asset = storage.createAsset(
                    storage.AssetType.ImageBitmap,
                    storage.DataFormat.PNG,
                    runtime.v2BitmapAdapter.convertDataURIToBinary(dataURI),
                    null,
                    true // generate md5
                );
                costume.dataFormat = storage.DataFormat.PNG;
                costume.assetId = costume.asset.assetId;
                costume.md5 = `${costume.assetId}.${costume.dataFormat}`;
            };

            if (!fetched.assetMatchesBase) {
                updateCostumeAsset(fetched.canvas.toDataURL());
            }

            return fetched;
        })
        .then(({canvas, mergeCanvas, rotationCenter}) => {
            // createBitmapSkin does the right thing if costume.rotationCenter is undefined.
            // That will be the case if you upload a bitmap asset or create one by taking a photo.
            let center;
            if (rotationCenter) {
                // fetchBitmapCanvas will ensure that the costume's bitmap resolution is 2 and its rotation center is
                // scaled to match, so it's okay to always divide by 2.
                center = [
                    rotationCenter[0] / 2,
                    rotationCenter[1] / 2
                ];
            }

            // TODO: costume.bitmapResolution will always be 2 at this point because of fetchBitmapCanvas_, so we don't
            // need to pass it in here.
            costume.skinId = runtime.renderer.createBitmapSkin(canvas, costume.bitmapResolution, center);
            canvasPool.release(mergeCanvas);
            const renderSize = runtime.renderer.getSkinSize(costume.skinId);
            costume.size = [renderSize[0] * 2, renderSize[1] * 2]; // Actual size, since all bitmaps are resolution 2

            if (!rotationCenter) {
                rotationCenter = runtime.renderer.getSkinRotationCenter(costume.skinId);
                // Actual rotation center, since all bitmaps are resolution 2
                costume.rotationCenterX = rotationCenter[0] * 2;
                costume.rotationCenterY = rotationCenter[1] * 2;
                costume.bitmapResolution = 2;
            }
            return costume;
        });
};

// Handle all manner of costume errors with a Gray Question Mark (default costume)
// and preserve as much of the original costume data as possible
// Returns a promise of a costume
const handleCostumeLoadError = function (costume, runtime) {
    // Keep track of the old asset information until we're done loading the default costume
    const oldAsset = costume.asset; // could be null
    const oldAssetId = costume.assetId;
    const oldRotationX = costume.rotationCenterX;
    const oldRotationY = costume.rotationCenterY;
    const oldBitmapResolution = costume.bitmapResolution;
    const oldDataFormat = costume.dataFormat;

    const AssetType = runtime.storage.AssetType;
    const isVector = costume.dataFormat === AssetType.ImageVector.runtimeFormat;
                
    // Use default asset if original fails to load
    costume.assetId = isVector ?
        runtime.storage.defaultAssetId.ImageVector :
        runtime.storage.defaultAssetId.ImageBitmap;
    costume.asset = runtime.storage.get(costume.assetId);
    costume.md5 = `${costume.assetId}.${costume.asset.dataFormat}`;
    
    const defaultCostumePromise = (isVector) ?
        loadVector_(costume, runtime) : loadBitmap_(costume, runtime);

    return defaultCostumePromise.then(loadedCostume => {
        loadedCostume.broken = {};
        loadedCostume.broken.assetId = oldAssetId;
        loadedCostume.broken.md5 = `${oldAssetId}.${oldDataFormat}`;

        // Should be null if we got here because the costume was missing
        loadedCostume.broken.asset = oldAsset;
        loadedCostume.broken.dataFormat = oldDataFormat;
        
        loadedCostume.broken.rotationCenterX = oldRotationX;
        loadedCostume.broken.rotationCenterY = oldRotationY;
        loadedCostume.broken.bitmapResolution = oldBitmapResolution;
        return loadedCostume;
    });
};

/**
 * Initialize a costume from an asset asynchronously.
 * Do not call this unless there is a renderer attached.
 * @param {!object} costume - the Scratch costume object.
 * @property {int} skinId - the ID of the costume's render skin, once installed.
 * @property {number} rotationCenterX - the X component of the costume's origin.
 * @property {number} rotationCenterY - the Y component of the costume's origin.
 * @property {number} [bitmapResolution] - the resolution scale for a bitmap costume.
 * @property {!Asset} costume.asset - the asset of the costume loaded from storage.
 * @param {!Runtime} runtime - Scratch runtime, used to access the storage module.
 * @param {?int} optVersion - Version of Scratch that the costume comes from. If this is set
 *     to 2, scratch 3 will perform an upgrade step to handle quirks in SVGs from Scratch 2.0.
 * @returns {?Promise} - a promise which will resolve after skinId is set, or null on error.
 */
const loadCostumeFromAsset = function (costume, runtime, optVersion) {
    costume.assetId = costume.asset.assetId;
    const renderer = runtime.renderer;
    if (!renderer) {
        log.warn('No rendering module present; cannot load costume: ', costume.name);
        return Promise.resolve(costume);
    }
    const AssetType = runtime.storage.AssetType;
    let rotationCenter;
    // Use provided rotation center and resolution if they are defined. Bitmap resolution
    // should only ever be 1 or 2.
    if (typeof costume.rotationCenterX === 'number' && !isNaN(costume.rotationCenterX) &&
            typeof costume.rotationCenterY === 'number' && !isNaN(costume.rotationCenterY)) {
        rotationCenter = [costume.rotationCenterX, costume.rotationCenterY];
    }
    if (costume.asset.assetType.runtimeFormat === AssetType.ImageVector.runtimeFormat) {
        return loadVector_(costume, runtime, rotationCenter, optVersion)
            .catch(error => {
                log.warn(`Error loading vector image: ${error}`);
                return handleCostumeLoadError(costume, runtime);
                
            });
    }
    return loadBitmap_(costume, runtime, rotationCenter, optVersion)
        .catch(error => {
            log.warn(`Error loading bitmap image: ${error}`);
            return handleCostumeLoadError(costume, runtime);
        });
};


/**
 * Load a costume's asset into memory asynchronously.
 * Do not call this unless there is a renderer attached.
 * @param {!string} md5ext - the MD5 and extension of the costume to be loaded.
 * @param {!object} costume - the Scratch costume object.
 * @property {int} skinId - the ID of the costume's render skin, once installed.
 * @property {number} rotationCenterX - the X component of the costume's origin.
 * @property {number} rotationCenterY - the Y component of the costume's origin.
 * @property {number} [bitmapResolution] - the resolution scale for a bitmap costume.
 * @param {!Runtime} runtime - Scratch runtime, used to access the storage module.
 * @param {?int} optVersion - Version of Scratch that the costume comes from. If this is set
 *     to 2, scratch 3 will perform an upgrade step to handle quirks in SVGs from Scratch 2.0.
 * @returns {?Promise} - a promise which will resolve after skinId is set, or null on error.
 */
const loadCostume = function (md5ext, costume, runtime, optVersion) {
    const idParts = StringUtil.splitFirst(md5ext, '.');
    const md5 = idParts[0];
    const ext = idParts[1].toLowerCase();
    costume.dataFormat = ext;

    if (costume.asset) {
        // Costume comes with asset. It could be coming from image upload, drag and drop, or file
        return loadCostumeFromAsset(costume, runtime, optVersion);
    }

    // Need to load the costume from storage. The server should have a reference to this md5.
    if (!runtime.storage) {
        log.warn('No storage module present; cannot load costume asset: ', md5ext);
        return Promise.resolve(costume);
    }

    if (!runtime.storage.defaultAssetId) {
        log.warn(`No default assets found`);
        return Promise.resolve(costume);
    }

    const AssetType = runtime.storage.AssetType;
    const assetType = (ext === 'svg') ? AssetType.ImageVector : AssetType.ImageBitmap;

    const costumePromise = runtime.storage.load(assetType, md5, ext);

    let textLayerPromise;
    if (costume.textLayerMD5) {
        textLayerPromise = runtime.storage.load(AssetType.ImageBitmap, costume.textLayerMD5, 'png');
    } else {
        textLayerPromise = Promise.resolve(null);
    }

    return Promise.all([costumePromise, textLayerPromise])
        .then(assetArray => {
            if (assetArray[0]) {
                costume.asset = assetArray[0];
            } else {
                return handleCostumeLoadError(costume, runtime);
            }

            if (assetArray[1]) {
                costume.textLayerAsset = assetArray[1];
            }
            return loadCostumeFromAsset(costume, runtime, optVersion);
        })
        .catch(error => {
            // Handle case where storage.load rejects with errors
            // instead of resolving null
            log.warn('Error loading costume: ', error);
            return handleCostumeLoadError(costume, runtime);
        });
};
//Stage layering
class StageLayering {
    static get BACKGROUND_LAYER () {
        return 'background';
    }

    static get VIDEO_LAYER () {
        return 'video';
    }

    static get PEN_LAYER () {
        return 'pen';
    }

    static get SPRITE_LAYER () {
        return 'sprite';
    }

    // Order of layer groups relative to each other,
    static get LAYER_GROUPS () {
        return [
            StageLayering.BACKGROUND_LAYER,
            StageLayering.VIDEO_LAYER,
            StageLayering.PEN_LAYER,
            StageLayering.SPRITE_LAYER
        ];
    }
}

class Video {
    constructor (runtime) {
        this.runtime = runtime;

        /**
         * @typedef VideoProvider
         * @property {Function} enableVideo - Requests camera access from the user, and upon success,
         * enables the video feed
         * @property {Function} disableVideo - Turns off the video feed
         * @property {Function} getFrame - Return frame data from the video feed in
         * specified dimensions, format, and mirroring.
         */
        this.provider = null;

        /**
         * Id representing a Scratch Renderer skin the video is rendered to for
         * previewing.
         * @type {number}
         */
        this._skinId = -1;

        /**
         * Id for a drawable using the video's skin that will render as a video
         * preview.
         * @type {Drawable}
         */
        this._drawable = -1;

        /**
         * Store the last state of the video transparency ghost effect
         * @type {number}
         */
        this._ghost = 0;

        /**
         * Store a flag that allows the preview to be forced transparent.
         * @type {number}
         */
        this._forceTransparentPreview = false;
    }

    static get FORMAT_IMAGE_DATA () {
        return 'image-data';
    }

    static get FORMAT_CANVAS () {
        return 'canvas';
    }

    /**
     * Dimensions the video stream is analyzed at after its rendered to the
     * sample canvas.
     * @type {Array.<number>}
     */
    static get DIMENSIONS () {
        return [480, 360];
    }

    /**
     * Order preview drawable is inserted at in the renderer.
     * @type {number}
     */
    static get ORDER () {
        return 1;
    }

    /**
     * Set a video provider for this device. A default implementation of
     * a video provider can be found in scratch-gui/src/lib/video/video-provider
     * @param {VideoProvider} provider - Video provider to use
     */
    setProvider (provider) {
        this.provider = provider;
    }

    /**
     * Request video be enabled.  Sets up video, creates video skin and enables preview.
     *
     * ioDevices.video.requestVideo()
     *
     * @return {Promise.<Video>} resolves a promise to this IO device when video is ready.
     */
    enableVideo () {
        if (!this.provider) return null;
        return this.provider.enableVideo().then(() => this._setupPreview());
    }

    /**
     * Disable video stream (turn video off)
     * @return {void}
     */
    disableVideo () {
        this._disablePreview();
        if (!this.provider) return null;
        this.provider.disableVideo();
    }

    /**
     * Return frame data from the video feed in a specified dimensions, format, and mirroring.
     *
     * @param {object} frameInfo A descriptor of the frame you would like to receive.
     * @param {Array.<number>} frameInfo.dimensions [width, height] array of numbers.  Defaults to [480,360]
     * @param {boolean} frameInfo.mirror If you specificly want a mirror/non-mirror frame, defaults to the global
     *                                   mirror state (ioDevices.video.mirror)
     * @param {string} frameInfo.format Requested video format, available formats are 'image-data' and 'canvas'.
     * @param {number} frameInfo.cacheTimeout Will reuse previous image data if the time since capture is less than
     *                                        the cacheTimeout.  Defaults to 16ms.
     *
     * @return {ArrayBuffer|Canvas|string|null} Frame data in requested format, null when errors.
     */
    getFrame ({
        dimensions = Video.DIMENSIONS,
        mirror = this.mirror,
        format = Video.FORMAT_IMAGE_DATA,
        cacheTimeout = this._frameCacheTimeout
    }) {
        if (this.provider) return this.provider.getFrame({dimensions, mirror, format, cacheTimeout});
        return null;
    }

    /**
     * Set the preview ghost effect
     * @param {number} ghost from 0 (visible) to 100 (invisible) - ghost effect
     */
    setPreviewGhost (ghost) {
        this._ghost = ghost;
        // Confirm that the default value has been changed to a valid id for the drawable
        if (this._drawable !== -1) {
            this.runtime.renderer.updateDrawableEffect(
                this._drawable,
                'ghost',
                this._forceTransparentPreview ? 100 : ghost
            );
        }
    }

    _disablePreview () {
        if (this._skinId !== -1) {
            this.runtime.renderer.updateBitmapSkin(this._skinId, new ImageData(...Video.DIMENSIONS), 1);
            this.runtime.renderer.updateDrawableVisible(this._drawable, false);
        }
        this._renderPreviewFrame = null;
    }

    _setupPreview () {
        const {renderer} = this.runtime;
        if (!renderer) return;

        if (this._skinId === -1 && this._drawable === -1) {
            this._skinId = renderer.createBitmapSkin(new ImageData(...Video.DIMENSIONS), 1);
            this._drawable = renderer.createDrawable(StageLayering.VIDEO_LAYER);
            renderer.updateDrawableSkinId(this._drawable, this._skinId);
        }

        // if we haven't already created and started a preview frame render loop, do so
        if (!this._renderPreviewFrame) {
            renderer.updateDrawableEffect(this._drawable, 'ghost', this._forceTransparentPreview ? 100 : this._ghost);
            renderer.updateDrawableVisible(this._drawable, true);

            this._renderPreviewFrame = () => {
                clearTimeout(this._renderPreviewTimeout);
                if (!this._renderPreviewFrame) {
                    return;
                }

                this._renderPreviewTimeout = setTimeout(this._renderPreviewFrame, this.runtime.currentStepTime);

                const imageData = this.getFrame({
                    format: Video.FORMAT_IMAGE_DATA,
                    cacheTimeout: this.runtime.currentStepTime
                });

                if (!imageData) {
                    renderer.updateBitmapSkin(this._skinId, new ImageData(...Video.DIMENSIONS), 1);
                    return;
                }

                renderer.updateBitmapSkin(this._skinId, imageData, 1);
                this.runtime.requestRedraw();
            };

            this._renderPreviewFrame();
        }
    }

    get videoReady () {
        if (this.provider) return this.provider.videoReady;
        return false;
    }

    /**
     * Method implemented by all IO devices to allow external changes.
     * The only change available externally is hiding the preview, used e.g. to
     * prevent drawing the preview into project thumbnails.
     * @param {object} - data passed to this IO device.
     * @property {boolean} forceTransparentPreview - whether the preview should be forced transparent.
     */
    postData ({forceTransparentPreview}) {
        this._forceTransparentPreview = forceTransparentPreview;
        // Setting the ghost to the current value will pick up the forceTransparentPreview
        // flag and override the current ghost. The complexity is to prevent blocks
        // from overriding forceTransparentPreview
        this.setPreviewGhost(this._ghost);
    }
}
class ImageBlocks {
    constructor() {
        this.runtime = window.vm.runtime;

        this.uniq = Date.now();
    }

    getInfo () {
        return {
            id: 'ImageData', //mlforkids for orig.
            name: 'Images',
            blocks: [
                {
                    opcode: 'getCostumeImage',
                    // text: formatMessage({
                    //     id: 'mlforkidsImageData.imageblocks.getCostumeImage',
                    //     defaultValue: 'costume image'
                    // }),
                    text: 'costume image',
                    blockType: BlockType.REPORTER,
                    //filter: [ TargetType.SPRITE ]
                },
                {
                    opcode: 'getBackdropCostumeImage',
                    // text: formatMessage({
                    //     id: 'mlforkidsImageData.imageblocks.getBackdropCostumeImage',
                    //     defaultValue: 'backdrop image'
                    // }),
                    text: 'backdrop image',
                    blockType: BlockType.REPORTER,
                    //filter: [ TargetType.SPRITE ]
                },
                {
                    opcode: 'getBackdropImage',
                    // text: formatMessage({
                    //     id: 'mlforkidsImageData.imageblocks.getBackdropImage',
                    //     defaultValue: 'backdrop image'
                    // }),
                    text: 'backdrop image',
                    blockType: BlockType.REPORTER,
                    //filter: [ TargetType.STAGE ]
                },
                {
                    opcode: 'saveScreenshotToCostume',
                    // text: formatMessage({
                    //     id: 'mlforkidsImageData.imageblocks.saveScreenshotToCostume',
                    //     defaultValue: 'save screenshot to costume'
                    // }),
                    text: 'save screenshot to costume',
                    blockType: BlockType.COMMAND,
//fiter sprite
                },
                {
                    opcode: 'getWebcamFrameImage',
                    text: 'webcam image',
                    blockType: BlockType.REPORTER
                }
            ]
        };
    }

    _getImageAsJpeg (imagedata) {
        return new Promise(function (resolve) {
            var image = new Image();
            image.onload = function () {
                var canvas = document.createElement('canvas');
                console.log('[mlforkids] Resizing image to dimensions needed for classifying');
                canvas.width = 224;
                canvas.height = 224;

                var context = canvas.getContext('2d');
                context.fillStyle = "#FFFFFF";
                context.fillRect(0, 0, canvas.width, canvas.height);

                context.drawImage(image,
                                  0, 0, image.width, image.height,
                                  0, 0, canvas.width, canvas.height);

                var jpegdata = canvas.toDataURL('image/jpeg');
                if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
                    jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
                }
                resolve(jpegdata);
            };
            image.src = imagedata;
        });
    }

    _getStageCanvas () {
        var allCanvases = document.getElementsByTagName('canvas');
        for (var i = 0; i < allCanvases.length; i++) {
            var canvas = allCanvases[i];
            // if (canvas.className.startsWith('stage_stage_')) {
            if (canvas.width > 0 &&
                canvas.className.indexOf('paper-canvas_paper-canvas') === -1)
            {
                return canvas;
            }
        }
    }


    // Return the image data for a screenshot of the entire stage
    _getStageScreenshot() {
        // get the backdrop image
        this.runtime.renderer.draw();
        var originalCanvas = this._getStageCanvas();
        const WIDTH = originalCanvas.width;
        const HEIGHT = originalCanvas.height;

        // make a new off-screen canvas to copy to
        var copyCanvas = document.createElement('canvas');
        copyCanvas.width = WIDTH;
        copyCanvas.height = HEIGHT;
        var copyContext = copyCanvas.getContext('2d');

        // copy a section of the backdrop to the copy canvas
        copyContext.drawImage(originalCanvas, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT);

        // return the canvas data
        const screenshot = copyCanvas.toDataURL('image/jpeg');
        return screenshot;
    }





    getCostumeImage (args, util) {
        const target = util.target;
        const costume = target.getCurrentCostume();

        if (costume && costume.asset) {
            return this._getImageAsJpeg(costume.asset.encodeDataURI());
        }

        if (costume && costume.assetId) {
            const costumeimage = this.runtime.storage.builtinHelper.get(costume.assetId);
            if (costumeimage && costumeimage.dataFormat === 'png') {
                var pngdata = Base64Util.arrayBufferToBase64(costumeimage.data);
                return this._getImageAsJpeg('data:image/png;base64,' + pngdata);
            }
            else if (costumeimage && costumeimage.dataFormat === 'jpg') {
                var jpgdata = Base64Util.arrayBufferToBase64(costumeimage.data);
                return this._getImageAsJpeg('data:image/jpeg;base64,' + jpgdata);
            }
            else if (costumeimage && costumeimage.dataFormat === 'svg') {
                var svgxml = String.fromCharCode(...costumeimage.data);
                svgxml = svgxml.replace(/"/g, '\'');
                return this._getImageAsJpeg('data:image/svg+xml,' + encodeURIComponent(svgxml));
            }

            console.log('[mlforkids] Unexpected costume image, format: ' + costumeimage.dataFormat);
        }

        return '';
    }


    // This returns the backdrop image
	//  (i.e. the composite of all sprites - what is visible on
	//   the stage/backdrop)
	//  at the location of the sprite.
	//
	// So the returned image will be from the same size and location
	//  as what you get from getCostumeImage
	//  but will be based on the image you'd get from getBackdropImage
	//
	// It's sort of a hybrid between the two functions
    getBackdropCostumeImage (args, util) {
        // where is the sprite's top left corner and how big is it?
        var target = util.target;
        var costume = target.getCurrentCostume();
        var sizeRatio = target.size / 100;
        var width = (costume.size[0] / costume.bitmapResolution) * sizeRatio;
        var height = (costume.size[1] / costume.bitmapResolution) * sizeRatio;
        var x = target.x - (costume.rotationCenterX / costume.bitmapResolution);
        var y = target.y + (costume.rotationCenterY / costume.bitmapResolution);

        // convert the Scratch size and coordinates into canvas coords
        //  Scratch coordinates are:
        //      x=-240 (left)    to  x=+240 (right)
        //      y=-180 (bottom)  to  y=+180 (top)
        //  Canvas coordinates (default view) are:
        //      x=0 (left)       to  x=+960 (right)
        //      y=720 (bottom)   to  y=0 (top)
        //  (the scale factor is different when full-screen, but the
        //   top-left is always 0,0 and the y value increases as you
        //   go down)

        var originalCanvas = this._getStageCanvas();
        // assume that the factor will be the same for both width and height
        var scaleFactor = originalCanvas.width / 480;

        x = scaleFactor * ( x + 240 );
        y = -scaleFactor * ( y - 180 );
        width *= scaleFactor;
        height *= scaleFactor;

        // make a new off-screen canvas to copy to
        console.log('[mlforkids] Resizing backdrop to dimensions needed for classifying');
        var RESIZE_WIDTH = 224;
        var RESIZE_HEIGHT = 224;
        var copyCanvas = document.createElement('canvas');
        copyCanvas.width = RESIZE_WIDTH;
        copyCanvas.height = RESIZE_HEIGHT;
        var copyContext = copyCanvas.getContext('2d');

        // get the backdrop image
        this.runtime.renderer.draw();

        // copy a section of the backdrop to the copy canvas
        copyContext.drawImage(originalCanvas,
                              x, y, width, height,
                              0, 0, RESIZE_WIDTH, RESIZE_HEIGHT);

        // get the base64-encoded version of the copy canvas
        var jpegdata = copyCanvas.toDataURL('image/jpeg');
        if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
            jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
        }
        return jpegdata;
    }


    getBackdropImage () {
        this.runtime.renderer.draw();
        const canvas = this._getStageCanvas();
        var jpegdata = canvas.toDataURL('image/jpeg');
        if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
            jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
        }
        return jpegdata;
    }


    //
    // step 1) Take a screenshot of the entire stage,
    //  (i.e. the composite of all sprites - what is visible on
    //   the stage/backdrop)
    //
    // step 2) Add the screenshot to the sprite as a new costume
    //
    // step 3) Switch to the new costume
    //
    saveScreenshotToCostume (args, util) {
        const _storage = this.runtime.storage;
        const _runtime = this.runtime;
        const target = util.target;

        const BitmapAdapter = SvgRenderer.BitmapAdapter;
        const bitmapAdapter = new BitmapAdapter();

        return bitmapAdapter.importBitmap(this._getStageScreenshot(), 'image/jpeg')
            .then((dataBuffer) => {
                const name = 'webcam';
                const type = _storage.AssetType.ImageBitmap;
                const dataFormat = _storage.DataFormat.JPG;

                const asset = _storage.createAsset(type, dataFormat, dataBuffer, null, true);

                const assetId = asset.assetId;
                const md5 = assetId + '.' + dataFormat;

                const costume = { name, dataFormat, asset, md5, assetId };

                return loadCostume(md5, costume, _runtime);
            })
            .then((costume) => {
                target.addCostume(costume);
                target.setCostume(target.getCostumes().length - 1);
            })
            .catch(e => {
                console.log('[mlforkids] Failed to save screenshot to costume');
                console.log(e);
            });
    }


    getWebcamFrameImage () {
        this.runtime.ioDevices.video.enableVideo();
        const webcamFrame = this.runtime.ioDevices.video.getFrame({
            format: Video.FORMAT_CANVAS,
            dimensions: [ 244, 244 ]
        });
        var jpegdata = webcamFrame.toDataURL('image/jpeg');
        if (jpegdata.indexOf('data:image/jpeg;base64,') === 0) {
            jpegdata = jpegdata.substr('data:image/jpeg;base64,'.length);
        }
        return jpegdata;
    }
}

var extensionInstance = new ImageBlocks(window.vm.extensionManager.runtime)
var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
