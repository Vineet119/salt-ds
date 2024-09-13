import {
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import {
  FormField,
  FormFieldHelperText as FormHelperText,
  FormFieldLabel as FormLabel,
} from "@salt-ds/core";
import {
  DatePicker,
  DatePickerOverlay,
  DatePickerSingleInput,
  formatDate,
  getCurrentLocale,
} from "@salt-ds/lab";
import { CustomDatePickerPanel } from "@salt-ds/lab/stories/date-picker/CustomDatePickerPanel";
import React, { type ReactElement } from "react";

function formatSingleDate(
  date: DateValue | null,
  locale = getCurrentLocale(),
  options?: Intl.DateTimeFormatOptions,
) {
  if (date) {
    return formatDate(date, locale, options);
  }
  return date;
}

export const SingleWithCustomPanel = (): ReactElement => {
  const helperText = "Date format DD MMM YYYY (e.g. 09 Jun 2024)";
  const minDate = today(getLocalTimeZone());
  return (
    <FormField style={{ width: "256px" }}>
      <FormLabel>Select a date</FormLabel>
      <DatePicker
        minDate={minDate}
        maxDate={minDate.add({ years: 50 })}
        selectionVariant="single"
        onSelectedDateChange={(newSelectedDate, _error) => {
          console.log(`Selected date: ${formatSingleDate(newSelectedDate)}`);
        }}
      >
        <DatePickerSingleInput />
        <DatePickerOverlay>
          <CustomDatePickerPanel
            selectionVariant="single"
            helperText={helperText}
          />
        </DatePickerOverlay>
      </DatePicker>
      <FormHelperText>{helperText}</FormHelperText>
    </FormField>
  );
};
