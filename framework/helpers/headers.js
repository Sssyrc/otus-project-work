import token from "../config/tokens";

const headers = () => {
    ({'Accept': 'application/json',
    'Content-Type': 'application/json',
    'api_key': `${token.correctToken}`})
  };
  
export default headers;