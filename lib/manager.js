import { Constants, Messages } from "../utils/constant.js";
import { Injector } from "./injector.js";
import { Utils } from '../utils/utils.js';

export class Manager {
  constructor(values, option) {
    this.valuesOk = this.loadValues(values, option);
  }

  /**
   * @description function that load damage percentage of each injector
   * @param string[] values 
   * @returns boolean return if the data is correct
   */
  loadInjectores(values) {
    let valide = true;
    let i = 0;
    while(i < Constants.NumInjectors) {
      const damagePercentage = values[i + 3];
      if (damagePercentage >= 0 && damagePercentage <= 100) {
        this.injectors.push(new Injector(damagePercentage));
      } else {
       Utils.showLog('error', `${Messages.ErrorInjector} ${i + 1}`);
        i = values.length;
        valide = false;
      }      
      i++;
    }
    return valide;
  }

   /**
   * @description function that load flow data to process 
   * @returns void
   */
  loadFlowData() {
    this.enableInjectors = 0;
    this.plasmaFlow = 0;
    this.injectors.forEach(x => {
      if (x.getPlasma()) {
        this.enableInjectors ++;
      }
      this.plasmaFlow += x.getPlasma();
    })
  }

   /**
   * @description function that load all value to process
   * @param string[] values 
   * @param boolean option
   * @returns boolean return if the data is correct
   */
  loadValues(values, option) {
    const maxPercentage = (((Constants.PlasmaBase + Constants.ExtraPlasma) * Constants.NumInjectors) *100) / Constants.PlasmaMax;
    this.injectors = [];
    let valide = this.loadInjectores(values);
    if (valide && option) {
      this.speedPercentage = values[Constants.NumInjectors + 3];
      if (this.speedPercentage >= 0 && this.speedPercentage <= maxPercentage) {
        this.requiredPlasma = (this.speedPercentage * Constants.PlasmaMax) / 100;
        this.loadFlowData();
      } else {
        Utils.showLog('error', Messages.ErrorSpeed);
        valide = false;
      }
    }
    return valide;
  }

   /**
   * @description function that process data for get flow data and show results
   * @returns void
   */
  processFlow() {
    if (this.valuesOk) {
      let plasma = this.requiredPlasma - this.plasmaFlow;
      let injectorFlow = plasma / this.enableInjectors;
      let message = '';
      if (injectorFlow <= Constants.ExtraPlasma) {
        let time = Messages.ResultInfinite;
        this.injectors.forEach((x, index) => {
          let flow =  x.getPlasma();
          if (flow) {
            flow += injectorFlow;
          }
          message += `${String.fromCharCode(65 + index)}: ${flow} ${Messages.Abbreviation}, `;
          if (injectorFlow > 0) {
            time = `${Constants.MaxTime - injectorFlow} ${Messages.Minutes}`
          }
        });
        message += `\n${Messages.Time}: ${time}`
      } else {
        message += `${Messages.UnableComply}`
        message += `\n${Messages.Time}: 0`
      }
      console.log(message);
    }
  }

   /**
   * @description function that process speed maximun and show the result
   * @returns void
   */
  processSpeedMax() {
    if (this.valuesOk) {
      this.loadFlowData();
      const speedMax = this.plasmaFlow * 100 / Constants.PlasmaMax;
      let message = `${Messages.MessageSpeed} ${speedMax}`;
      console.log(message)
    }
  }
}