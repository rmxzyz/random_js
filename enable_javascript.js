javascript:try {if (typeof trustedTypes !== "undefined") {if(!trustedTypes.defaultPolicy) {  const defaultPolicyA = trustedTypes.createPolicy("default", {   createHTML: (string) => string, });}}} catch(error) {alert(“Could not add default policy: “,error)}

//like accounts.google.com when it says an error about trusted HTML, this fixes it. Only on some websites though.
