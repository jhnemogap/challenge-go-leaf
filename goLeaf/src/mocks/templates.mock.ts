import type { FormTemplate } from '../domain/models/index.ts';

export const TEMPLATES_MOCK = new Map<string, FormTemplate>([
  [
    'DKK010-f24c-0001',
    {
      uuid: 'DKK010-f24c-0001',
      description: 'formulario para crear una...',
      formDetail: {
        title: 'Título del formulario 0001',
        inputs: [
          {
            label: 'Nombre completo',
            type: 'text',
            valueType: 'string',
            fileType: null,
          },
          {
            label: 'Número de identificación personal',
            type: 'text',
            valueType: 'string',
          },
          {
            label: 'Edad (años)',
            type: 'number',
            valueType: 'number',
          },
        ],
      }
    },
  ],
  [
    'DKK010-f24c-0002',
    {
      uuid: 'DKK010-f24c-0002',
      description: 'Formulario N2 para dar de alta...',
      formDetail: {
        title: 'Título del formulario #2',
        inputs: [
          {
            label: 'Nombre completo',
            type: 'text',
            valueType: 'string',
            fileType: null,
          },
          {
            label: 'Es extranjero',
            type: 'select',
            valueType: 'boolean',
          },
          {
            label: 'Número de identificación personal',
            type: 'text',
            valueType: 'string',
          },
          {
            label: 'Fecha de nacimiento',
            type: 'datepicker',
            valueType: 'timestamp',
          },
        ],
      }
    },
  ],
]);

export const TEMPLATES_BY_CLIENT_MOCK = new Map([
  [
    'ABC90001XYZ',
    {
      clientId: 'ABC90001XYZ',
      templates: ['DKK010-f24c-0001'],
    }
  ],
  [
    'ABC90002XYZ',
    {
      clientId: 'ABC90002XYZ',
      templates: ['DKK010-f24c-0001'],
    }
  ],
  [
    'ABC90003XYZ',
    {
      clientId: 'ABC90003XYZ',
      templates: ['DKK010-f24c-0001'],
    }
  ],
]);
