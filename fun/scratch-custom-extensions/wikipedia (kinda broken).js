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
if (!Scratch) {
    Scratch = {
      // @ts-expect-error
      BlockType: {
        COMMAND: 'command',
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
};
class WikipediaBlocks {

	constructor() {
		this._blackicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBA4SCxKQ7S7/AAADUUlEQVRYw+2YWWxMURjHfxp0mNZkiAohNIjGEiISBJHYIm1qe+JBRCS2IBoSWyJC1NLaHuy7NiJBiSXxJKFBQu0ilgchRCi6qCrVfh5mcubc23NmOtMRL/c/L5Pz++7/m3PPPd/57oAnT548eUqiWv0r0zmcoJFqaimnmlp8pJNGGn7a04Yr5HKfoQif+UQFdbTFT2cC+EmlmNk8YjC1VFJFJTUECBIgQCp98fGUBqqopJIKfAQJEsTHPI4BdGAtFxDDp5xdjAdGUsC7JvQOBYwBprKVtw7ym1MsB/ys4ozrqsusop1z9jtcIXtdd2eJg05z0WJFtrpIF0Xe0NF849doxnUGfkDjbmWGxzcarjuNIPwgxb7m95TxByNvUHyiiwxAEMqMV51EELKjPWx9tDllGHieojdcZDuCWG7lK4RnsZ7z68p6j5HXKN7PMd6IsMl4RbfY8wUYHWUdAZYpek0b3Yzwy+K4D+Fzc/Z2ZGvkGXm94r3DI+0QhEUWP0FY3JzEc5VxhZGv0/ZkSIcRyi1uy6z3zqA/1t0amUPo0xPIQBCmW7zKEQqamzhfGT828m2KXwAuIrywOE1CENKbmzhNm9MgA0/V+AQEYYTFqRThXDyHx1llXGLke7XUjdy0uHRHELLiSTxAMw4YeMBRtzMtLgettSyKnijbnUZepPhNq4cg5MSbeEaMQtJV452MEXlRNllUfVfGS428RPHjRv4VYUkiiVcr4y9GXhj1OZgcT+FwKkUzbrpS6Y7H61ATfhuhMNGO7IgyLjOesa+11H4H7YkgdEg0cQ/NOMtw1GVw39IoHUU435IutFQZO+vPJYRiYKz203yuRerfksTjNONIxc1CENIAeKn4bsVXIjxoaef9URlvV2O3ELaEv+dqP61NeKwCIbeliRdqNTmk4Qj1WsR7FRE6/nKsGzBORWYU6jGeu7qNWVpECnDXWnLiVKTR/wRkGzqobyoin16JFw63gtqMRvHBsH7zteUosh4rCeiyMq6xdCU/HXUskKzEwxy2QwwRKzRekszX2chuvWqJaFQRA5OZeGbUFxuADWH+MNmv8KFV3B/zLJuS7MTrEYTWUSIKEb4l/08LX8x+oj3Cgv/xF8w/+ZPGkydPnjzxF6SKIzp7XV4GAAAAAElFTkSuQmCC';
		this._whiteicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBA4SDSbnA33MAAADl0lEQVRYw+2YXYhVVRTH/3dI5+qd8XInnEgUFRWHPkgiKFEJ0iIcxq8nfQiJIFNMGgrsAyQSP2dKfdC0Dy0dRLBG8QN6ElRKUKfUIiofpEhCR53RptFS59fDve6zzz1737n3zsWnsx7Pf53/f6+9115rnSPFFltsscVWOSNREC2TNSGxUF+oTzfUq07dUK+SqlWNapTSUA3SoUQTHXpS6LIuqUu3NFgpDVdaKVWrLfESZ/SEetWt6+pWj9LKKK20qjVBSf2ou7qubnWrS0lllFFGSb2S2C6JYbzLPlzWyQamS0ymhT8i6AlamCYxm7X8HkL+YydvSKRYzp68tw6ynCHhTfswz2Xzva3MbidLQ+icPLTNIGuDI0ASDxnkAnWRw0ES71jEt6Lnx9YAzn+bsTngA0ce7AbgH6q8GcEpw3zRlUbcNfjzhIUfBeC0k/VLAGb6ZcV4K+b6qCPNBj2ah6wHoM5Fzm/AT/1dniOGepMT7zH4xFDMfcBKZzAj+ok35zbVd445j2UG/sZ6ugr418O5BbhcTMEIrkazE79t8HHZrGYIAIs9fABLihF+2RB3OfH3gjuZe/Ip0OlhW+bbO5fzneC24osha6MR9QDMdbPTCbQUK7zaEJ914usMvk9iP/CLJ2NeAKC2yJCpsWJ6nChdtYXPAOAZT7zHga9K6Uh7DXG7E99sSfdxzBPvSAAaiu5gpg5lLe2IOR2q22M98W7z1bJC4ucM7UdOfJfBj3k5ABpL6tiIeYUKCeJhK+IHnbnf7L9khcX/NsSvO/F2g+9w4leBpeUIv22IrzjxVn8eIF4soXDkEVdZxI0R4tpQen0Sefs7oLXcMe8zQ3za2WPPW9Ip7GWNBmBYWSEjRlnEDURbXT0d4UHJeHwOfD2Q0fa4IQ7VHw4AbRLPWktLEj6kRyhbVjxnEdfeG+BoAKAGSfxq8I3mvbeA7wc6zv9liNebZ98Ca3KLaLKWNii3tC6giQEKvxbU5JzU08DtYAblT+PRIiEafRewVOnAFksSP9vTBmKB5VElcdJXckoVDgb9SxIzoxMU14zHasaUXTgiCZaxIprCxej58arVInf52ko54gcNcY97KuFmqI6lUWVifipEO8kx6L9p4e2V/EYObuthj0ef8XiMismK+YU+bCSJ93P4D5X+L5A9xY/77WWzqLDwCgAe8NPSClyr/J+QZOF5AjEUWHSff8EU5xFbbLHFFltZ9j9KAPeEBQql9AAAAABJRU5ErkJggg==';

		this._caches = {
			pages : {}
		};
    }

	getInfo () {
		return {
			id: 'Wikipedia', //thanks to mlforkids for orig.
			name: 'Wikipedia',

            menuIconURI: this._blackicon,
            blockIconURI: this._whiteicon,

            // colour for the blocks
            color1: '#666666',
            // colour for the menus in the blocks
            color2: '#ffffff',
            // border for blocks and parameter gaps
            color3: '#060606',

			blocks: [
				{
					opcode: 'wikipediaPageText',
					text:'Wikipedia text about [TOPIC]',
					blockType: Scratch.BlockType.REPORTER,
					arguments: {
						TOPIC: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Scratch (programming language)'
						}
					}
				}
			]
		};
	}


	wikipediaPageText (args, util) {
		const searchstring = args.TOPIC;

		if (!searchstring) {
			return '';
		}

		if (this._caches.pages[searchstring])
		{
			return this._caches.pages[searchstring];
		}

		var url = new URL('https://proxy.machinelearningforkids.co.uk/wikipedia/w/api.php');
		url.searchParams.append('action', 'query');
		url.searchParams.append('format', 'json');
		url.searchParams.append('prop', 'extracts');
		url.searchParams.append('explaintext', '');
		url.searchParams.append('titles', searchstring);

        var _cache = this._caches.pages;

        return fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
				if (responseJson &&
					responseJson.query &&
					responseJson.query.pages &&
					Object.keys(responseJson.query.pages).length > 0 &&
					responseJson.query.pages[Object.keys(responseJson.query.pages)[0]].extract)
				{
					_cache[searchstring] = responseJson.query.pages[Object.keys(responseJson.query.pages)[0]].extract;
					return _cache[searchstring];
				}
				else {
					console.log(responseJson);
					return '';
				}
            })
            .catch((err) => {
            	console.log(err);
            	return '';
            });
	}

}
   var extensionInstance = new WikipediaBlocks(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
