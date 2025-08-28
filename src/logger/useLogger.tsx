import { useCallback, useState } from "react";

export const useLogger = () => {
  const [logMessages, setLogMessages] = useState<Array<string>>([]);
  
  const add = useCallback((...args: Array<string | object | number>) => {
    
    const message = args.reduce((message:string, arg) => {
      if(typeof arg === 'string' || typeof arg === 'number') {
        message = message.length > 0 ? message + '  ' + String(arg) : String(arg);
      } else {
        message = message.length > 0 ? message + '  ' + JSON.stringify(arg) : JSON.stringify(arg);
      }
      return message;
    }, '')


    setLogMessages(prev => [...prev, message]);
    
  }, [] as Array<string>);
  
  const messages = logMessages.map((message, index) => {
    if(typeof message === 'string' || typeof message === 'number') {
      return <p key={index}>{message}</p>
    }
    return <p key={index}>{JSON.stringify(message)}</p>
  });
  
  const logger = {
    add,
    messages
  }

  return logger;
}
