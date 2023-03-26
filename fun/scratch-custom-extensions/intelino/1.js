var Scratch3IntelinoBlocks = /*#__PURE__*/function (_IntelinoBlocks) {
  _inherits(Scratch3IntelinoBlocks, _IntelinoBlocks);
  var _super = _createSuper(Scratch3IntelinoBlocks);
  /**
   * Construct a set of intelino blocks.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function Scratch3IntelinoBlocks(runtime) {
    var _this;
    _classCallCheck(this, Scratch3IntelinoBlocks);
    // Create a new peripheral instance
    var peripheral = new IntelinoSmartTrain(runtime, Scratch3IntelinoBlocks.EXTENSION_ID);
    _this = _super.call(this, peripheral);

    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    _this.runtime = runtime;
    return _this;
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  class Scratch3IntelinoBlocks {
      getInfo() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Scratch3IntelinoBlocks.prototype), "getInfo", this).call(this)), {}, {
        id: Scratch3IntelinoBlocks.EXTENSION_ID,
        name: Scratch3IntelinoBlocks.EXTENSION_NAME,
        blockIconURI: IntelinoImages.BlockIconBlue,
        showStatusButton: true
      });
    }
  }], [{
    key: "EXTENSION_NAME",
    get:
    /**
     * @return {string} - the name of this extension.
     */
    function get() {
      return  'intelino smart train 1',
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return 'intelino';
    }
  }]
  return Scratch3IntelinoBlocks;
}(IntelinoBlocks);
