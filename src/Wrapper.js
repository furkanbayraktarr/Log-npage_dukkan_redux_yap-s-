import React from "react";
import Router from "./Router";
import AuthProvider from "./context/AuthProvider";


export default () =>  {
    return(
        <AuthProvider>
            <Router/>
        </AuthProvider>
    )
}

/*Bu wrapper dosyasını index.js te ana dosya haline getirdik. 
AuthProvider <Provider store={store} >{children}</Provider> döndürür. 
children provider içinde ne varsa o olmuş oluyor. burada children <Router/>
olmuş oluyor. yani sonuç olarak routerı Provider ile sarmış oluyoruz. */