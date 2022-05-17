import { Manager } from './lib/manager.js'
import { Messages } from './utils/constant.js';
import { Utils } from './utils/utils.js';

const args = process.argv
let manager;
switch(args[2]) {
  case 'flow':
    Utils.showLog('notice', Messages.MessageResults);
    manager = new Manager(args, true);
    manager.processFlow();
    break;
  case 'speedMax':
    Utils.showLog('notice', Messages.MessageResults);
    manager = new Manager(args);
    manager.processSpeedMax();
    break;
  default:
    Utils.showLog('error', Messages.MessageInvalidCommand);
    Utils.usage();
}
