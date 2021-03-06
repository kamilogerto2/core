export interface IServiceShortMain {
  active: boolean,
}

export interface IService {
  api: string,
  method: 'POST' | 'PUT' | 'GET' | 'DELETE',
  path: string,
  code: number,
  delay?: number,
  header: any
}

export interface IMessage {
  event: string,
  path: string,
  delay?: number
}

export interface IApiMain {
  services: IService[];
  port: number;
}

export interface IWebsocketMain {
  messages: IMessage[],
  trigger: 'ON_CONNECTION' | 'IMMEDIATELY';
  repeat: boolean;
}

