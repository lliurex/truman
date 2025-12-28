
# mostrar modules y metodos

xmlRpcClient("https://localhost","get_methods", [],"xml",function (err, data) {
                if (err) {
                        console.log ("err.message == " + err.message);
                        tests.stateList = false;
                        }
                else {
                        console.log (xmlGetAttribute(data,"return"));
                        tests.stateList = true;
                        }
                });    



# metodo buil-in autenticado

## sin parametros
xmlRpcClient("https://localhost","get_ticket",["user","pass"],"xml",function (err, data) {
		if (err) {
			console.log ("err.message == " + err.message);
			tests.stateList = false;
			}
		else {
			console.log (xmlGetAttribute(data,"return"));
			tests.stateList = true;
			}
		});

## con parametros
xmlRpcClient("https://localhost","set_variable", [["user","ticket"],"prueba_var","prueba_val2"],"xml",function (err, data) {
                if (err) {
                        console.log ("err.message == " + err.message);
                        tests.stateList = false;
                        }
                else {
                        console.log (xmlGetAttribute(data,"return"));
                        tests.stateList = true;
                        }

		});

# metodo (lliurex_version) del plugin LliurexVersion sin auth ni parámetros

xmlRpcClient("https://localhost","lliurex_version", ["","LliurexVersion"],"xml",function (err, data) {
                if (err) {
                        console.log ("err.message == " + err.message);
                        tests.stateList = false;
                        }
                else {
                        console.log (xmlGetAttribute(data,"return"));
                        tests.stateList = true;
                        }
                });




xmlRpcClient("https://localhost","create_key", [["user","pass"],"CryptManager","prueba"],"xml",function (err, data) {
	 if (err) {
                        console.log ("err.message == " + err.message);
                        tests.stateList = false;
                        }
                else {
                        console.log (xmlGetAttribute(data,"return"));
                        tests.stateList = true;
                        }

		});

xmlRpcClient("https://localhost","encode_text", [["user","pass"],"CryptManager","prueba", "texto secreto"],"xml",function (err, data) {
	 if (err) {
                        console.log ("err.message == " + err.message);
                        tests.stateList = false;
                        }
                else {
                        console.log (xmlGetAttribute(data,"return"));
                        tests.stateList = true;
                        }

		});




