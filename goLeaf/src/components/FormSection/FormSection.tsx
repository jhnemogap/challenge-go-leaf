import type { FormTemplate } from '../../domain/index.ts';

export function FormSection(props: Props) {
	const { template: { formDetail: { inputs, title = '' } } } = props;
	return (
		<section class='w-full max-w-2xl m-auto mt-4 flex flex-col gap-4'>
			<h1 class='text(xl center) font-semibold'>{title}</h1>
			<form
				method='post'
				enctype='multipart/form-data'
				class='w-full max-w-lg m-auto py-4 px-5 rounded-lg bg-yellow-300'
			>
				{inputs.map(({ label, name, required, type, placeholder }) => (
					<fieldset key={`input-${name}`} class='mb-4'>
						<label class='flex flex-col gap-1'>
							{label}
							<input
								required={required}
								name={name}
								type={type}
								placeholder={placeholder}
								class='py-1 px-2 border(solid 2 gray-300) rounded-lg placeholder:italic'
							/>
						</label>
					</fieldset>
				))}
				<button type='submit' class='px-5 py-3 rounded-lg border(1 solid gray-300) bg-green-100'>
					Enviar
				</button>
			</form>
		</section>
	);
}

interface Props {
	template: FormTemplate;
}
