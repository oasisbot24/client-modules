const channel = {
  sidebar: 'sidebar',
  version: 'version',
  update: {
    log: 'update_log',
    progress: 'update_progress',
  },
  member: {
    login: 'member_login',
  },
  dashboard: {
    getHistory: 'dashboard_getHistory',
    getPatchnote: 'dashboard_getPatchnote',
  },
  oasisbot: {
    isRunning: 'oasisbot_isRunning',
    getInput: 'oasisbot_getInput',
    getHistory: 'oasisbot_getHistory',
    loop: 'oasisbot_loop',
    error: 'oasisbot_error',
    buy: 'oasisbot_buy',
    sell: 'oasisbot_sell',
    start: 'oasisbot_start',
    stop: 'oasisbot_stop',
  },
  setting: {
    preset: {
      isValid: 'setting_preset_isValid',
      get: 'setting_preset_get',
      getList: 'setting_preset_getList',
      save: 'setting_preset_save',
    },
    indicator: {
      get: 'setting_indicator_get',
      getFrame: 'setting_indicator_getFrame',
      getList: 'setting_indicator_getList',
    },
  },
  bankselect: {
    bank: {
      select: 'bankselect_bank_select',
    },
  },
  backtest: {
    isRunning: 'backtest_isRunning',
    getInput: 'backtest_getInput',
    getHistory: 'backtest_getHistory',
    loop: 'backtest_loop',
    progress: 'backtest_progress',
    start: 'backtest_start',
    stop: 'backtest_stop',
  },
  api: {
    usdtToKrw: {
      get: 'api_usdtToKrw_get',
    },
    exchange: {
      getName: 'api_exchange_getName',
    },
    coin: {
      getList: 'api_coin_getList',
      getTicker: 'api_coin_getTicker',
      getTickerWS: 'api_coin_getTickerWS',
    },
    account: {
      getBalance: 'api_account_getBalance',
    },
    keys: {
      open: 'api_keys_open',
      close: 'api_keys_close',
      get: 'api_keys_get',
      save: 'api_keys_save',
    },
  },
  window: {
    minimize: 'window_minimize',
    unmaximize: 'window_unmaximize',
    maximize: 'window_maximize',
    close: 'window_close',
  },
  log: {
    info: 'log_info',
    error: 'log_error',
    debug: 'leg_debug',
  },
  cache: 'cache',
};

export default channel;
