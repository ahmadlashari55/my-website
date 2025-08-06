 function setLanguage(lang) {
      localStorage.setItem('preferredLang', lang);
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
      document.querySelectorAll('.lang-ur').forEach(el => el.style.display = lang === 'ur' ? 'block' : 'none');
    }

    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);