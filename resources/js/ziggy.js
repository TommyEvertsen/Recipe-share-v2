const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"recipe.index":{"uri":"recipe","methods":["GET","HEAD"]},"recipe.store":{"uri":"recipe","methods":["POST"]},"recipe.update":{"uri":"recipe\/{recipe}","methods":["PUT","PATCH"],"bindings":{"recipe":"id"}},"recipe.destroy":{"uri":"recipe\/{recipe}","methods":["DELETE"],"bindings":{"recipe":"id"}},"myrecipes":{"uri":"myrecipes","methods":["GET","HEAD"]},"createrecipe":{"uri":"createrecipe","methods":["GET","HEAD"]},"randomrecipe":{"uri":"randomrecipe","methods":["GET","HEAD"]},"recipe.like":{"uri":"recipes\/{recipe}\/like","methods":["POST"],"bindings":{"recipe":"id"}},"mostpopular":{"uri":"mostpopular","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };