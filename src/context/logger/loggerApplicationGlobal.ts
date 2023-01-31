type State = {
  dispatch: any;
  getState: any;
};

type Next = (arg: any) => any;
type Action = (arg0: any, arg1: any) => any;

const logger = (storeAPI: State) => (next: Next) => (action: Action) => {
  let response = next(action);

  const { meta } = response;

  if (meta && meta.storageProdcuts) {
    const { storageProdcuts, Key } = meta;
    localStorage.setItem(Key, JSON.stringify(storageProdcuts));
  }

  return response;
};

export default logger;
