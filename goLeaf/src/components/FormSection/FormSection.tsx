import type { FormTemplate } from '../../domain/index.ts';

export function FormSection(props: Props) {
  const { template } = props;
  console.info('FormSection', { template });
  return (
    <div>
      <form>
      </form>
    </div>
  );
}

interface Props {
  template: FormTemplate;
}
