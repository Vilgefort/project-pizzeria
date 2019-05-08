import { BaseWidget } from './BaseWidget.js';
import { select, settings } from '../settings.js';
import { utils } from '../utils.js';

export class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;
    thisWidget.maxDaysInFuture = settings.datePicker.maxDaysInFuture;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);
    thisWidget.initPlugin();
  }

  initPlugin() {
    const thisWidget = this;
    thisWidget.minDate = new Date(thisWidget.value);
    //console.log(thisWidget.minDate);

    thisWidget.maxDate = utils.addDays(thisWidget.minDate, thisWidget.maxDaysInFuture);
    flatpickr(thisWidget.dom.input, {// eslint-disable-line
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      disable: [
        function(date) {
          return date.getDay() === 1;
        },
      ],
      locale: {
        firstDayOfWeek: 1,
      },
      onChange: function(dateStr) {
        thisWidget.value = dateStr;
      },
    });
  }

  parseValue(newValue) {
    return newValue;
  }

  isValid() {
    return true;
  }

  renderValue() {}
}
