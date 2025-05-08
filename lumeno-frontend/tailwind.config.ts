/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: false,
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3b82f6', // blue-500
					hover: '#2563eb' // blue-600
				},
				secondary: {
					DEFAULT: '#6b7280', // gray-500
					hover: '#4b5563' // gray-600
				},
				success: {
					DEFAULT: '#10b981', // emerald-500
					hover: '#059669' // emerald-600
				},
				danger: {
					DEFAULT: '#ef4444', // red-500
					hover: '#dc2626' // red-600
				},
				warning: {
					DEFAULT: '#f59e0b', // amber-500
					hover: '#d97706' // amber-600
				},
				info: {
					DEFAULT: '#0ea5e9', // sky-500
					hover: '#0284c7' // sky-600
				}
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		// Отключение автоматического переключения темы

		// Использование только светлой темы
		themes: [
			{
				light: {
					primary: '#3b82f6',
					secondary: '#6b7280',
					accent: '#0ea5e9',
					neutral: '#191D24',
					'base-100': '#ffffff',
					info: '#0ea5e9',
					success: '#10b981',
					warning: '#f59e0b',
					error: '#ef4444'
				}
			}
		],
		darkTheme: false, // Явно отключаем темную тему
		base: true, // Подключаем базовые стили DaisyUI
		styled: true, // Включаем компоненты DaisyUI
		utils: true, // Включаем утилиты
		rtl: false,
		prefix: '', // Можно задать префикс для классов DaisyUI
		logs: true
	}
}
