const translations = {
	en: {
		/* ===== HEADER / NAV ===== */
		"header-brand-name": "Rightway Pe",
		"header-brand-tagline": "Gold & Silver Loans Simplified",
		"header-brand-tagline": "Gold & Silver Loans Simplified",
	},

	kn: {
		/* ===== HEADER / NAV ===== */
		"header-brand-name": "ರೈಟ್ವೇ ಪೇ",
		"header-brand-tagline": "ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ ಸಾಲಗಳು ಸುಲಭವಾಗಿ",
	},
};

function switchLanguage(lang) {
	document.documentElement.lang = lang;

	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.dataset.i18n;
		if (translations[lang] && translations[lang][key]) {
			el.textContent = translations[lang][key];
		}
	});

	localStorage.setItem("lang", lang);
}

// Handle radio buttons
document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('input[name="lang"]').forEach((input) => {
		input.addEventListener("change", () => {
			switchLanguage(input.value);
		});
	});

	// Restore saved language
	const savedLang = localStorage.getItem("lang") || "en";
	const radio = document.querySelector(`input[value="${savedLang}"]`);
	if (radio) radio.checked = true;

	switchLanguage(savedLang);
});
