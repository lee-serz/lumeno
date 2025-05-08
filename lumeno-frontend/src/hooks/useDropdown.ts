import { useEffect, useRef } from 'react'

export const useDropdown = () => {
	const dropdownRef = useRef<HTMLDetailsElement>(null)
	const chevronRef = useRef<SVGSVGElement>(null)

	useEffect(() => {
		const dropdown = dropdownRef.current
		const chevron = chevronRef.current
		if (!dropdown || !chevron) return

		const handleClickOutside = (event: MouseEvent) => {
			if (!dropdown.contains(event.target as Node)) {
				dropdown.open = false
			}
		}

		const handleToggle = () => {
			chevron.style.transform = dropdown.open ? 'rotate(-90deg)' : 'rotate(0)'
		}

		document.addEventListener('mousedown', handleClickOutside)
		dropdown.addEventListener('toggle', handleToggle)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			dropdown.removeEventListener('toggle', handleToggle)
		}
	}, [])

	const closeDropdown = () => {
		if (dropdownRef.current) {
			dropdownRef.current.open = false
		}
	}

	return { dropdownRef, chevronRef, closeDropdown }
}
