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
  name: string;
  required: boolean;
  type: 'text' | 'textArea' | 'number' | 'datepicker' | 'select';
  valueType: string | string[] | number | number[] | boolean | 'timestamp';
  defaultValue?: string | number | boolean;
  options?: string[] | number[];
  placeholder?: string;
  fileType?: 'pdf' | 'png' | 'jpeg' | null;
}
