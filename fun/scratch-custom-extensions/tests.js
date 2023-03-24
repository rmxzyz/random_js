//Test extensions.
const from_s = s => (''+s).split(' ').map(s=> s.split(',').map(v=> isNaN(+v) ? 0 : +v))
const to_s = m => m.map(v=> v.join(',')).join(' ')

const safe_index = (m,i) => m[m.length == 1 ? 0 : i]

const component_wise = f => (a,b) => {
	let [m,n] = a.length > b.length ? [a,b] : [b,a]
	return m.map((v,i)=>  safe_index(n,i) == undefined ? v : f(safe_index(a,i), safe_index(b,i)))
}
const component_wise2D = f => (a,b) => component_wise(component_wise(f))(a,b)
const add = component_wise((a,b)=>a+b)
const mul = component_wise((a,b)=>a*b)
const add2D = component_wise2D((a,b)=>a+b)
const sub2D = component_wise2D((a,b)=>a-b)
const mul2D = component_wise2D((a,b)=>a*b)
const div2D = component_wise2D((a,b)=>a/b)

const set = (i,m,v) => {
	if(m.length == 1) {
		if(m[0][i-1] != undefined)
			m[0][i-1] = v[0][0]
	}
	else {
		m[i-1] = v[0]
	}
	return m
}
const get = (i,m) => [ m.length == 1 ? ( [m[0][i-1]] ?? [] ) : ( m[i-1] ?? [] ) ]

const dot = (a,b) => {
	if(a.length == 1 && a[0].length == 3)
		a = a[0].map(v=>[v])
	return b.map(bv=> a.reduce((acc,av,i)=> add(acc,mul(av,[safe_index(bv,i)])), 0))
}

const det = (m,i1,i2) => m[0][i1%3]*m[1][i2%3]-m[0][i2%3]*m[1][i1%3]
const cross = component_wise((a,b)=> a.map((_,i)=>det([a,b], i+1, i+2)))

const length = m => m.map(v=> dot([v],[v]).map(v=> Math.sqrt(v)))
const normalize = m => div2D(m,length(m))

const rotate = (a,v) => {
	a = a[0][0] * Math.PI / 180
	v = normalize(v)[0]

	const s = Math.sin(a)
	const c = Math.cos(a)

	const f1 = i => c + v[i] * v[i] * (1-c)
	const f2 = (i, n) => v[(i+1)%3] * v[(i+2)%3] * (1-c) + n * v[i] * s

	return [
		[f1(0), f2(2,1), f2(1,-1)],
		[f2(2,-1), f1(1), f2(0,1)],
		[f2(1,1), f2(0,-1), f1(2)]
	]
}

// =================== Scratch extension =================== 

// auto arguments is a little over complicated to deduce argument count

const letter = i => String.fromCharCode(97+i)

const auto_block = (blockType, opcode, text, args) => ({
	blockType,
	opcode,
	text,
	arguments: Object.fromEntries(
		new Array(text.split('[').length-1).fill().map((_,i)=> [
			letter(i), {
				type: (args && args[i]) || "string", //number 
				defaultValue: " "
			}
		])
	)
})
const mat_reporter_f = f => o => to_s(f(...new Array(Object.entries(o).length).fill().map((_,i)=> from_s(o[letter(i)]))))

class CustomExtension {

	constructor(runtime) {
		this.runtime = runtime
	}

	getInfo() {
	    return {
	    	id: "custom",
	    	name: "Custom Extension",
	    	blocks: [
	        auto_block('reporter', "Prompt", "Prompt [a]"),
                auto_block('command', "Alert", "Alert [a]"),
                auto_block('reporter', "Sqrt", "Square root [a]"),
                auto_block('command', 'js', "Javascript [a]"),
                auto_block('command', "href", "Redirect to [a]"),
                auto_block('reporter', 'getlist', 'Get List [a]'),
                auto_block('reporter', 'setlist', 'Set List [a] to [b]'), 
                auto_block('reporter', 'exact', 'Is [a] exactly [b]?'),
                auto_block('reporter', 'exponent', '[a] ^ [b]'),
                auto_block('reporter', 'date', 'Current Date'),
                auto_block('reporter', 'pi', 'π'),
                auto_block('reporter', 'currentMillisecond', 'current millisecond'),
                auto_block('reporter', 'letters', 'Word [STRING] Start [START] End [END]'),
	        '---',
	      	
	    	],
	    	menus: {
	            varMenu: 'getVarMenu'
	        }
	    }
	}

	getVarMenu(target_id) {
		const vars = this.runtime.getTargetById(target_id).getAllVariableNamesInScopeByType('list')
		return vars.length == 0 ? [" "] : vars
	}

	Prompt({a}) {
		return prompt(a)
	}
        Alert({a}) {
                return alert(a)
        }
  letters({STRING, START, END}) {
      return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
    }
        Sqrt({a}) {
                return Math.sqrt(a)
       }
       js({a}) {
               return eval(a)
       }
       href({a}) { 
               return document.location.href = 'https://'+a 
       }
       Warn({a}) {
               return warn(a)
       }
       setList({a}) {
      
       }
       getlist({a}) {
                const list = vm.runtime.getTargetForStage().lookupVariableByNameAndType(a, 'list');
      if (list) {
        return JSON.stringify(list.value);
      } else {
        return "";
      }
       }
    exact({a, b}) {
            return a == b
    }
    exponent({a, b}) {
          return Math.pow(a, b);
    }
    pi() {
       return Math.PI;
    }
    currentMillisecond() {
          return Date.now() % 1000;
    }
    currentHour() {
       return new Date().getHours()
    }
    date() {
         return new Date()
    }
    setlist({ a, b }) {
      let parsed;
      try {
        parsed = JSON.parse(a);
      } catch (e) {
        return; // JSON was invalid
      }

      if (!Array.isArray(parsed)) {
        return; // it's not an array
      }

      for (const element of parsed) {
        const type = typeof element;
        if (type !== "string" && type !== "number" && type !== "boolean") {
          return; // One of the elements has a disallowed type
        }
      }

      const list = vm.runtime.getTargetForStage().lookupVariableByNameAndType(b, 'list');
      if (!list) {
        return; // List was not found
      }

      list.value = parsed;
    }
}

// ============== globalize vm and load extension ===============

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

(function() {
    var extensionInstance = new CustomExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
