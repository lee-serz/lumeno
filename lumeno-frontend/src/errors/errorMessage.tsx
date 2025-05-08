interface ErrorMessageProps {
	message?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<div
			className="min-h-[25px]" // Фиксированная высота (подберите под ваш размер текста)
			style={{
				visibility: message ? 'visible' : 'hidden',
				opacity: message ? 1 : 0,
				transition: 'opacity 0.2s ease'
			}}
		>
			{message && <p className="text-red-500 text-sm text-left">{message}</p>}
		</div>
	)
}
