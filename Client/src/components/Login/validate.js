export function ValidateEmail(email) {
	if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return true;
	}
	throw new Error('Email inválido!');
}

export function ValidatePassword(password) {
	if (password.length > 4) {
		return true;
	}
	throw new Error('La contraseña debe tener al menos 6 caracteres!');
}

export function ValidateName(name) {
	if (name.length > 3 && name.length < 20) {
		return true;
	}
	throw new Error('El nombre debe tener entre 3 y 20 caracteres!');
}
