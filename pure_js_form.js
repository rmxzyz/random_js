/* Create by Mohssine Aboutaj - 2017 */
// create the elements
var div = document.createElement('div'),
		log = document.createElement('div'),
		reg = document.createElement('div'),
		loginForm = document.createElement('form'),
		registerForm = document.createElement('form');

// set body styles
document.body.style.color = '#fff';
document.body.style.textTransform = 'capitalize';
document.body.style.backgroundImage = "url('https://cdn.lennar.net/images/com/images/new-homes/3/63/mhi/El%20Dorado%20Hills%20Sunset-1200x540.jpg?w=1200&h=540&as=1)";
document.body.style.backgroundSize = "cover";

// set main-div styles
div.style.background = "rgba(0,0,0,0.7)";
div.style.width = '300px';
div.style.margin = '50px auto';
div.style.padding = '10px';
div.style.borderRadius = '10px';

log.style.width = "calc(50% - (5px * 2))";
log.style.padding = "5px";
log.style.textAlign = "center";
log.style.display = 'inline-block';
log.style.color = '#fff';
log.style.cursor = 'pointer';
log.id = 'login';
log.innerHTML = 'login';

reg.style.width = "calc(50% - (5px * 2))";
reg.style.padding = "5px";
reg.style.textAlign = "center";
reg.style.display = 'inline-block';
reg.style.color = '#888';
reg.style.cursor = 'pointer';
reg.id = 'register';
reg.innerHTML = 'register';



// hide register form and show login form
reg.onclick = function(){
	this.style.color = '#fff';
	log.style.color = '#888';
	loginForm.style.display = 'none';
	registerForm.style.display = 'block';
};

// hide login form and show register form
log.onclick = function(){
	this.style.color = '#fff';
	reg.style.color = '#888';
	loginForm.style.display = 'block';
	registerForm.style.display = 'none';
};

// create some variables for styling
var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;",
    btnStyles = "background:red;border:none;width:100%;color:#fff;padding:5px;margin:5px;",
    forgetStyles = "color:#fff;",
    startYears = 10,
    endYears = 70,
    i;

// set loginForm styles
loginForm.style.margin = '50px 20px 20px 20px';
loginForm.id = 'loginForm';

// set the elements and styles on the form
loginForm.innerHTML = "<label>username</label><br/>" + 
                 "<input type='text' placeholder='type username' style='"+ inputStyles +"' /><br/>" + 
                 "<label>password</label><br/>" + 
                 "<input type='password' placeholder='*************' style='"+ inputStyles +"' /><br/>" + 
                 "<input type='submit' value='Login' style='"+ btnStyles +"' />" + 
                 "<p><a style='"+ forgetStyles +"' href='#'>forget password ?</a></p><br/>";

// set registerForm styles
registerForm.style.margin = '50px 20px 20px 20px';
registerForm.style.display = 'none';
registerForm.id = 'registerForm';

// set the elements and styles on the form
registerForm.innerHTML = "<label>first name</label><br/>" + 
			                 "<input type='text' placeholder='first name' style='"+ inputStyles +"' /><br/>" + 
			                 "<label>last name</label><br/>" + 
			                 "<input type='text' placeholder='last name' style='"+ inputStyles +"' /><br/>" + 
			                 "<label>e-mail</label><br/>" + 
			                 "<input type='email' placeholder='your email' style='"+ inputStyles +"' /><br/>" + 
			                 "<label>password</label><br/>" + 
			                 "<input type='password' placeholder='*************' style='"+ inputStyles +"' /><br/>" + 
			                 "<label>confirm password</label><br/>" + 
			                 "<input type='password' placeholder='*************' style='"+ inputStyles +"' /><br/>" + 
			                 "<input type='submit' value='Register' style='"+ btnStyles +"' />";

// append the bottons and form on main-div
div.appendChild(log);
div.appendChild(reg);
div.appendChild(loginForm);
div.appendChild(registerForm);

// append main-div on the body
document.body.appendChild(div);
