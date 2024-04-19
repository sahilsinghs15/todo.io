import { createContext } from "react";

export default createContext(null);


//***//

//In Context Api we used it to access the any element wherever it is located either it is outside or deep inside many layers 
//It can Reach there 
//To use context api we have mainly two functions 

//1. createContext() to create a initial context and we change it during calling it in Provider Method.
//2. useContext(anyContext) - is used to provide a Context value by passing the context in arguments. 

//***//