import { BaseWidget } from './BaseWidget.js';
import { settings, select } from '../settings.js';
import { utils } from '../utils.js';

export class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);
    thisWidget.initPlugin();
  }

  initPlugin() {
    thisWidget.minDate = new Date(thisWidget.value);
    console.log(thisWidget.minDate);
    thisWidget.maxDate = thisWidget.minDate + settings.datePicker.maxDaysInFuture;
  }

  parseValue(newValue) {
    return newValue;
  }

  isValid(newValue) {
    return newValue == true;
  }

  renderValue() {}
}
