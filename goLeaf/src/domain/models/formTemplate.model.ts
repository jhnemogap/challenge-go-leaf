import type { UUID } from '../types/index.ts';

export interface FormTemplate {
  uuid: UUID;
  description?: string;
  formDetail: FormDetail;
}

export interface FormDetail {
  title?: string;
  inputs: InputToFormDetail[];
}

export interface InputToFormDetail {
  label: string;
  placeholder?: string;
  type: 'text' | 'textArea' | 'number' | 'datepicker' | 'select';
  options?: string[] | number[];
  valueType: string | string[] | number | number[] | boolean | 'timestamp';
  fileType?: 'pdf' | 'png' | 'jpeg' | null;
}
