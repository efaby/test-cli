import chalk from 'chalk';
import { Usage } from './constant.js';

export class Utils {

   /**
   * @description function that show inforamtion about application
   * @returns void
   */
  static usage() {
    const usageText = `
    ${Usage.Title}

    demoCli ${Usage.Description}

    uso:
    demoCli <command>

      Commandos:

      flow:        ${Usage.FlowDescription}
      speedMax:    ${Usage.SpeedMaxdescription}

    `;

    this.showLog('info', usageText);
  }

   /**
   * @description function that show erros by types
   * @returns void
   */
  static showLog(type, message) {
    let eLog;
    switch(type) {
      case 'error':
        eLog = chalk.red(message)
        break;
      case 'notice':
        eLog = chalk.blue(message)
        break;
      case 'info':
        eLog = chalk.green(message)
        break;
      default:
        eLog = message
    }
    console.log(eLog)
  }
}
